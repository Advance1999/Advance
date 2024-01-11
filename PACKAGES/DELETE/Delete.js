const DELETE=(STORAGE)=>{

        if (STORAGE==='local') {
          
            STORAGE=localStorage;
            
        } else {
            
            STORAGE=sessionStorage;
    
        }
    
        STORAGE.clear()
    
    }
    

export {DELETE}