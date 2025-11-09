import React from "react";
import { useSelector } from "react-redux";
import jsPDF from "jspdf";
import "jspdf-autotable";

const ExportPDF = () => {
  const quotes = useSelector((state) => state.philosophersData.currentData);

  const exportPDF = () => {
    if (!quotes || quotes.length === 0) {
      alert("No quotes to export!");
      return;
    }

    const doc = new jsPDF({
      orientation: "portrait",
      unit: "pt",
      format: "a4",
    });

    // 🧾 Title
    doc.setFontSize(18);
    doc.text("Quotes Collection", 40, 40);

    // 🧱 Table content
    const tableColumn = ["No.", "Quote"];
    const tableRows = quotes.map(({ quote, id }, index) => [
      id || index + 1,
      quote,
    ]);

    // 🪄 AutoTable (from jspdf-autotable)
    doc.autoTable({
      startY: 60,
      head: [tableColumn],
      body: tableRows,
      styles: { fontSize: 10, cellPadding: 5 },
      headStyles: { fillColor: [240, 240, 240], textColor: 20, fontStyle: "bold" },
      alternateRowStyles: { fillColor: [250, 250, 250] },
    });

    // 💾 Download
    doc.save("quotes.pdf");
  };

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
