/**
 * 内容分类管理 内容增加
 */
router.get("/content/insertTbContent",(req,res) =>{
    const pid = url.parse(req.url, true).query.pid;
    const name = url.parse(req.url, true).query.name;
    const contentUrl = url.parse(req.url, true).query.url;
    const image = url.parse(req.url, true).query.image;
    const sql = "insert into contentinfo values(null,?,?,?,?)";
    sqlFn(sql,[pid,name,contentUrl,image],result =>{
        if (result.affectedRows > 0) {
            res.send({
                status: 200,
                msg: "添加成功"
            })
        } else {
            res.send({
                status: 500,
                msg: "添加失败"
            })
        }
    })
})


/**
* 内容分类管理 内容删除
*/

router.get("/content/deleteContentByIds",(req,res) =>{
    const id = url.parse(req.url, true).query.id;
    const sql = "delete from contentinfo where id=?"
    sqlFn(sql,[id],result =>{
        if (result.affectedRows > 0) {
            res.send({
                status: 200,
                msg: "删除成功"
            })
        } else {
            res.send({
                status: 500,
                msg: "删除失败"
            })
        }
    })
})

/**
 * 内容分类管理 内容查询
 */
router.get("/content/selectTbContentAllByCategoryId", (req, res) => {
    const pid = url.parse(req.url, true).query.pid;
    const sql = "select * from contentinfo where pid=?"
    sqlFn(sql, [pid], result => {
        if (result.length > 0) {
            res.send({
                status: 200,
                result
            })
        } else {
            res.send({
                status: 500,
                msg: "暂无数据"
            })
        }
    })
})