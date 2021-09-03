export const getDateFromCreatedToCurrent = (created:string,current:Date):Array<string> => {
    const lists = []

    const currentYear = current.getFullYear()
    const createdYear = +created.slice(0,4)
    const currentMonth = current.getMonth()+1
    const createdMonth = +created.slice(4)


    for(let year=createdYear;year<=currentYear;year++){
        for(let month=createdMonth;month<=currentMonth;month++){
            const monthString = month < 10 ? '0'+month : month.toString()
            lists.push(year.toString()+monthString)
        }
    }
    return lists
}
export const getCurrentDate = () => {
    const current = new Date()
    const month = current.getMonth()+1 < 10 ? '0'+(current.getMonth()+1) : (current.getMonth()+1).toString()
    const year = current.getFullYear()
    return year+month
}

export const formatDate = (date:string) => {
    const year = date.slice(0,4)
    const month = date.slice(4)
    return `${year}년 ${month}월`
}

export const unformatDate = (date:string) => {
    const year = date.slice(0,4)
    const month = date.slice(6,8)
    return year+month
}

export const getFullCurrentDate = () => {
    const currentDate = new Date()
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()+1 < 10 ? '0'+(currentDate.getMonth()+1) : currentDate.getMonth()+1
    const day = currentDate.getDate()
    return [year,month,day].join('-')
}