public interface ITriggerFactory {
	void beforeinsert(sObject so);
    void beforeUpdate(sObject oldSo,sObject newSo);
    void beforeDelete(sObject so);
 	void afterinsert(sObject so);
    void afterUpdate(sObject oldSo,sObject newSo);
    void afterDelete(sObject so);
       
}