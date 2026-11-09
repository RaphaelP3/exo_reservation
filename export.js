function exportReservations(reservations){
  const rows=["Client;Prestation;Date"];
  reservations.forEach((r)=>rows.push(`${r.customer};${r.service};${r.date}`));
  const blob=new Blob([rows.join("\n")],{type:"text/csv;charset=utf-8"});
  const link=document.createElement("a"); link.href=URL.createObjectURL(blob); link.download="reservations.csv"; link.click(); URL.revokeObjectURL(link.href);
}
