export const getCurrentDate = () => {
    const current = new Date()
    const year = current.getFullYear().toString();
    const month =
      current.getMonth() < 10 ? "0" + (current.getMonth()+1) : (current.getMonth()+1).toString();
    const day = current.getDate().toString().padStart('0',2)

    return year+month+day;
}