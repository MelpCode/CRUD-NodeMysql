const menuCtrl =  {}

menuCtrl.getMenus = (req,res)=>{
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM menus',(err,menus)=>{
            if(err){
                res.json(err);
            }
            console.log(menus);
            res.json(menus);
        });
    });
};

menuCtrl.createMenu = (req,res)=>{
    //Getting data:
    const data = req.body;
    req.getConnection((err,conn)=>{
        conn.query('INSERT INTO menus SET ? ',[data],(err,rows)=>{
            if(err){
                res.json(err);
            }
            res.json({status:'New menu saved'})
        })
    })
};

menuCtrl.getMenu= (req,res)=>{
    const {id} = req.params;
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM menus WHERE idmenu=?',[id],(err,menu)=>{
            if(err){
                res.json(err);
            }
            res.json(menu);
        })
    })
};

menuCtrl.updateMenu = (req,res)=>{
    const {id} = req.params;
    const newMenu = req.body;
    req.getConnection((err,conn)=>{
        conn.query('UPDATE menus SET ? WHERE idmenu=?',[newMenu,id],(err,rows)=>{
            if(err){
                res.json(err);
            }
            res.json({status:'Menu Updated'})
        })
    })
};


menuCtrl.deleteMenu = (req,res)=>{
    const {id} = req.params;
    console.log(id);
    req.getConnection((err,conn)=>{
        conn.query('DELETE FROM menus WHERE idmenu = ?',[id],(err,rows)=>{
            if(err){
                res.json(err);
            }
            res.json({status:'Menu Deteled'})
        })
    })
}

module.exports = menuCtrl;