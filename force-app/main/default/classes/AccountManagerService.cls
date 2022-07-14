public class AccountManagerService {
    map<id,list<user>> userVsHer;
    public AccountManagerService(){
        userVsHer= new map<id,list<user>>();
        
    }
    public void getUseratLevel(){
        integer limitRows =  Limits.getLimitQueryRows()-Limits.getQueryRows();
        map<id,list<id>> managerVsUser=new  map<id,list<id>>();
        map<id,user> idVsUser=new  map<id,user>();
        for(user user : [select id,name,ManagerId from user Limit :limitRows]){
            if(managerVsUser.containsKey(user.managerid)){
                
                managerVsUser.get(user.ManagerId).add(user.id);
            }else{
                managerVsUser.put(user.ManagerId,new List<id>{user.id});
            }
            idVsUser.put(user.id,user);
            
        }
        
        map<integer,list<user>> levelVsUser =new map<integer,list<user>>();
        for(user user:idVsUser.values())
        {
            integer level=getlevel(user.id,managerVsUser,idVsUser);
            
            if(levelVsUser.containskey(level)){
                levelVsUser.get(level).add(user);
                
            }else{
                levelVsUser.put(level,new List<user>{user});
                
                
            }
        }        
        system.debug(levelVsUser);
        
    }
    
    integer getlevel(id id, map<id,list<id>> managerVsUser,map<id,user> idVsUser){
        integer level=1;
        list<user> userList=new List<user>();
        id userid =idVsUser.get(id).managerid;
        userList.add(idVsUser.get(userid));
        if(userid == null){
            userVsHer.put(userid,userList);
            return level;
        }
        while(true){
            level++;
            
            if(userid != null && managerVsUser.containskey(userid) && idVsUser.get(userid).managerid!= null){
                
                
                userid=idVsUser.get(userid).managerid;
                userList.add(idVsUser.get(userid));  
            }else{
                break;
            }
            
            
        }
        system.debug(idVsUser.get(id).Name+''+userList);
        
        return level;
        
        
    }
    
    
    
    
    
}