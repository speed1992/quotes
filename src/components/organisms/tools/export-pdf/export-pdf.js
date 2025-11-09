import React from "react";
import { useSelector } from 'react-redux'
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

// Register the fonts
pdfMake.vfs = pdfFonts.pdfMake.vfs;

const ExportPDF = () => {
  const quotes = useSelector((state) => state.philosophersData.currentData)
  const exportPDF = () => {
    const tableBody = [
      [
        { text: "No.", bold: true },
        { text: "Quote", bold: true },
      ],
      ...quotes.map(({quote, id}, index) => [id, quote])
    ];

    const docDefinition = {
      pageOrientation: "portrait",
      pageSize: "A4",
      content: [
        { text: "Quotes Collection", style: "header" },
        {
          style: "tableExample",
          table: {
            headerRows: 1,
            widths: ["auto", "*"],
            body: tableBody
          },
          layout: {
            fillColor: function (rowIndex) {
              return rowIndex === 0 ? "#eeeeee" : null;
            }
          }
        }
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 0, 0, 10]
        },
        tableExample: {
          margin: [0, 5, 0, 15]
        }
      }
    };

    pdfMake.createPdf(docDefinition).download("quotes.pdf");
  };
  
  if (!quotes || quotes.length === 0) {
      alert("No quotes to export!");
      return;
    }

  return (
    <button
      onClick={exportPDF}
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
    >
      Export Quotes as PDF
    </button>
  );
};

export default ExportPDF;
