const profPermission=(req,res,next)=>{
        const user=req.session.user
        console.log(user.nume+" "+user.tip)
        if(user.tip==true){
            next()
        }else{
            return res.status(401).json("Studentii nu au permisiunea!")
        }
    }

const studPermission=(req,res,next)=>{
        const user=req.session.user
        console.log(user.nume+" "+user.tip)
        if(user.tip==false){
            next()
        }else{
            return res.status(401).json("Profesorii nu au permisiunea!")
        }
    }


module.exports={profPermission,studPermission};