/** */
export const getFormattedDate = (date) =>
  date
    ? new Date(date).toLocaleDateString("es-mx", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";
