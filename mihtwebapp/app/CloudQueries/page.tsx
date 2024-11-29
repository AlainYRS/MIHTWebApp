'use client'
import React, { useState } from 'react';
import { FbDB } from '@/public/services/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import TableComp from '@/complements/components/TableComp/TableComp';
import styles from './StylesQueries.module.css'

export default function CloudQueries(){
    const [data, setData] = useState<any[]>([]); // Estado para almacenar los datos consultados
    const [FechaInicial, setFechaInicial] = useState<number>(0); // Estado para almacenar los datos consultados
    const [FechaFinal, setFechaFinal] = useState<number>(20501212); // Estado para almacenar los datos consultados
    const [Coleccion, setColeccion] = useState<string>(''); // Estado para almacenar los datos consultados

    function flattenObject(data: any, parentKey: string = '', result: any = {}): any {
        for (let key in data) {
            if (data.hasOwnProperty(key)) {
                const value = data[key];
                const newKey = parentKey ? `${parentKey}.${key}` : key;

                switch (typeof value) {
                    case 'string':
                    case 'number':
                    case 'boolean':
                        result[newKey] = value;
                        break;
                    case 'object':
                        if (Array.isArray(value)) {
                            result[newKey] = value.join(', ');
                        } else if (value !== null) {
                            flattenObject(value, newKey, result);
                        } else {
                            result[newKey] = null;
                        }
                        break;
                    default:
                        result[newKey] = 'undefined';
                }
            }
        }
        return result;
    }

    function processDocuments(documents: any[]) {
        return documents.map((doc) => flattenObject(doc));
    }

    async function handleQuery(Collection : string, FechaI: number, FechaF:number) {
        try {
            const q = ((Collection == 'Customer Experience') ?
                query(
                    collection(FbDB, Collection),
                    where('Fecha', '>=', FechaI),
                    where('Fecha', '<=', FechaF),
                  )
                  :
                  query(
                      collection(FbDB, Collection),
                    )
                )
            const querySnapshot = await getDocs(q);
            
            const documents = querySnapshot.docs.map((doc) => ({ ...doc.data() }));

            const flattenedDocs = processDocuments(documents);
            setData(flattenedDocs); // Almacenar datos aplanados
        } catch (error) {
            console.log(error);
        }
    }


    return(
        <div className={styles.Contenedor}>
            <label className={styles.Label} htmlFor="">Fecha Inicial
                <input type="number" onChange={(e)=>setFechaInicial(Number(e.target.value))}/><br/>
            </label>
            <label className={styles.Label} htmlFor="">Fecha Final
                <input type="number" onChange={(e)=>setFechaFinal(Number(e.target.value))}/><br/>
            </label>
            <label className={styles.Label} htmlFor="">Colección
                <input type="text" onChange={(e)=>setColeccion(e.target.value)}/><br/>
            </label>
            <button className={styles.Consultar} onClick={()=>handleQuery(Coleccion, FechaInicial, FechaFinal)} value={''}>Consultar</button>
            {data.length > 0 && <TableComp data={data} />}
        </div>
    )
} 