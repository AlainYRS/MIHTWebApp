'use client'
import React, { useState } from "react";
import styles from './FirestoreQueryComp.module.css';
import { UseFirestoreFunc, FirestoreQueryFunc } from "@/functionalities/CommonFunctions/UseFirestoreFunc";

interface iDocument {
    Dcto: Record<string, any>;  // Datos del documento
    Id?: string;                // Id opcional para create
    Fields?: Partial<Record<string, any>>;  // Campos para update parcial
}

interface iCRUD {
    CRUD: 'create' | 'retrieve' | 'update' | 'replace' | 'delete' | 'remove';
    Collection: string;
    Documents?: Array<iDocument>; // Opcional en retrieve
    DBQuery?: () => Promise<Array<string>>; // Función para query de documentos
}

interface iQueryCriteria {
    field: string;    // Campo del documento
    operator: "<" | "<=" | "==" | ">" | ">=" | "!=" | "array-contains" | "array-contains-any" | "in" | "not-in";
    value: any;       // Valor para comparar
}

interface iQueryProps {
    initialCRUD: iCRUD;
    queryCriteria?: iQueryCriteria[]; // Criterios de búsqueda opcionales
}

export default function FirestoreQueryComp() {
    const [documents, setDocuments] = useState<Array<iDocument>>([]);
    const [resultIds, setResultIds] = useState<Array<string>>([]);
    const [CRUDAction, setCRUDAction] = useState<iCRUD['CRUD']>('retrieve');
    const [Coleccion, setColeccion] = useState<iCRUD['Collection']>('');
    const [queryCriteria, setQueryCriteria] = useState<iQueryCriteria[]>([]); //Que pasa si quiero traer todos?
    const [Campo, setCampo] = useState<iQueryCriteria['field']>(''); //Que pasa si quiero traer toda la colleccion
    const [Criterio, setCriterio] = useState<iQueryCriteria['operator']>('=='); //Como obtengo toda la coleccion
    const [Valor, setValor] = useState<string>('');

    // Función para agregar un nuevo criterio
    const addCriteria = () => {
        if (Campo && Criterio && Valor) {
            setQueryCriteria([...queryCriteria, { field: Campo, operator: Criterio, value: Valor }]);
            // Limpiar inputs
            setCampo('');
            setCriterio('==');
            setValor('');
        }
    };

    // Función para eliminar un criterio
    const removeCriteria = (index: number) => {
        const newCriteria = [...queryCriteria];
        newCriteria.splice(index, 1);  // Eliminar el criterio en el índice especificado
        setQueryCriteria(newCriteria);
    };

    // Función para ejecutar un query con criterios
    const handleQuery = async ({ initialCRUD, queryCriteria }: iQueryProps) => {
        if(queryCriteria && queryCriteria.length > 0){
            const documentIds = await FirestoreQueryFunc(initialCRUD.Collection, queryCriteria);
            setResultIds(documentIds);
            // console.log(documentIds)
            UseFirestoreFunc({
                CRUD: initialCRUD.CRUD,
                Collection: initialCRUD.Collection,
                DBQuery: () => Promise.resolve(documentIds),
            });
        } else {
            console.error('No Query, Documents or Valid collection');
        }
    };

    return (
        <div className={styles.container}>
            <h2>Firestore CRUD Component</h2>
            <label className={styles.LavelInput}>Action to Perform
                <select className={styles.QueryInput} name="CRUD" id="CRUD" onChange={(e) => setCRUDAction(e.target.value as iCRUD['CRUD'])}>
                    <option value="create">Crear</option>
                    <option value="retrieve">Recuperar</option>
                    <option value="update">Actualizar</option>
                    <option value="replace">Reemplazar</option>
                    <option value="delete">Eliminar</option>
                </select>
            </label>
            <br />
            <label className={styles.LavelInput}>Colection
                <input
                    className={styles.QueryInput}
                    onChange={(e) => setColeccion(e.target.value)}
                    type="text"
                    value={Coleccion}
                    placeholder="Colección"
                />
            </label>
            <br />
            <label className={styles.LavelInput}>Field
                <input
                    className={styles.QueryInput}
                    onChange={(e) => setCampo(e.target.value)}
                    type="text"
                    value={Campo}
                    placeholder="Campo"
                />
            </label>
            <br />
            <label className={styles.LavelInput}>Criteria
                <select className={styles.QueryInput} name="Criterio" id="Criterio" onChange={(e) => setCriterio(e.target.value as iQueryCriteria['operator'])}>
                    <option value="==">Igual</option>
                    <option value="!=">Diferente</option>
                    <option value="<">Menor</option>
                    <option value="<=">Menor o Igual</option>
                    <option value=">">Mayor</option>
                    <option value=">=">Mayor o Igual</option>
                    <option value="array-contains">Contiene</option>
                </select>
            </label>
            <br />
            <label className={styles.LavelInput}>Value
                <input
                    className={styles.QueryInput}
                    onChange={(e) => setValor(e.target.value)}
                    type="text"
                    value={Valor}
                    placeholder="Valor"
                />
            </label>
            <br />
            <button className={styles.Submit} onClick={addCriteria}>
                Añadir Criterio
            </button>
            <br />

            <div>
                <h3>Criterios Actuales:</h3>
                <ul>
                    {queryCriteria.map((criteria, index) => (
                        <li key={index}>
                            {criteria.field} {criteria.operator} {criteria.value}
                            <button className={styles.RemoveBtn} onClick={() => removeCriteria(index)}>Eliminar</button>
                        </li>
                    ))}
                </ul>
            </div>

            {(CRUDAction && Coleccion) &&
                <button className={styles.Submit} onClick={() => handleQuery({ initialCRUD: { CRUD: CRUDAction, Collection: Coleccion }, queryCriteria })}>
                    Ejecutar Query
                </button>
            }

            {resultIds.length > 0 && (
                <div>
                    <h3>Resultados de la consulta:</h3>
                    <ul>
                        {resultIds.map((id) => (
                            <li key={id}>{id}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
