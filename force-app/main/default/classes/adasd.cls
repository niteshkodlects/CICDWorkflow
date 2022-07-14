public class adasd implements database.Batchable<sObject> {
    
    public database.QueryLocator start(database.BatchableContext bc){
return database.getQueryLocator([Select id from account]);}
    
    public void execute(database.BatchableContext bc,List<sObject> scope){
        
    }
    
    public void finish(database.BatchableContext bc){}

}