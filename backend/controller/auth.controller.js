
export const signup = async (req, res) =>{
    try {
        const {fullName,username,password,confirmpassword}= req.body; 
    } catch (error) {
        
    }


};


export const login = (req , res)=>{
    // res.send("sign usere");
    console.log("login User ");
}


export const logout = (req, res) => {
    console.log("logout User");
}

