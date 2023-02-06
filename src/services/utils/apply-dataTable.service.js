export default (actions_subTable)=> {
    
    let tables = []
    let i = 0
    $('table').each(function () {
        tables[i] = $(this).DataTable({
            "retrieve": true,
            scrollX: false,
            paging: true,
            info: false,
            searching: true,
            destroy: true,
            "displayLength": 10,
            "fnDrawCallback": function (oSettings) {
                actions_subTable()
            }
        })
        i++
    })
    return{
        tables
    }
}