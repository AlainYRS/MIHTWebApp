import React from 'react';
import styles from './TableComp.module.css'; // Asegúrate de importar correctamente los estilos

interface DataRow {
  [key: string]: any;
}

interface DataTableProps {
  data: DataRow[];
}

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  if (data.length === 0) {
    return <div>No data available</div>;
  }

  const headers = Object.keys(data[0]);

  return (
    <div className={styles.TableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {headers.map((header) => (
                <td key={header}>
                  {/* Verifica si el valor es un objeto */}
                  {typeof row[header] === 'object' && !Array.isArray(row[header]) ? (
                    <ul>
                      {/* Mapea las claves y valores del objeto */}
                      {Object.entries(row[header]).map(([key, value]) => (
                        <li key={key}>
                          {key}: {typeof value === 'string' || typeof value === 'number' ? value : JSON.stringify(value)}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    // Si no es un objeto, renderiza el valor normalmente
                    typeof row[header] === 'string' || typeof row[header] === 'number'
                      ? row[header]
                      : JSON.stringify(row[header]) // Convierte a string los valores que no sean de tipo renderizable.
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
