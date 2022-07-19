Trigger  AccountTrigger on Account(after update,after insert){
	
	//comment
		If(Trigger.IsAfter){
			If(Trigger.IsInsert){
			//AccountHandler.afterInsertUpdateContactPhone(Trigger.New);
			}
			else If(Trigger.Isupdate){
                
			}
		}
	
}