public with sharing class CarController {
    public class Filter{
        @AuraEnabled
        public string searchKey{get;set;}

        @AuraEnabled
        public decimal MaxPrice{get;set;}

        @AuraEnabled
        public string[] categories{get;set;}
        @AuraEnabled
        public string[] maker{get;set;}
    }
  @AuraEnabled(cacheable=true)
  public static list<Car__c> getCars(Filter filter){
      try {
        String key, whereClause ='';
        Decimal maxPrice;
        String[] categories, makeType, criteria = new List<String>{};
        if(filter !=null){
            maxPrice = filter.maxPrice;
            categories = filter.categories;
            makeType = filter.maker;
            if(!String.isEmpty(filter.searchKey)){
                key = '%'+filter.searchKey + '%';
                criteria.add('Name LIKE: key');
            }
            if(filter.maxPrice >= 0){
                criteria.add('MSRP__c <= :maxPrice');
            }
            if(filter.categories != null){
                criteria.add('Category__c IN :categories');
            }
            if(filter.maker != null){
                criteria.add('Make__c IN :makeType');
            }
            if(criteria.size()>0){
                whereClause =  'WHERE ' + String.join(criteria, ' AND ');
            }
        }
        String query = 'SELECT Id, Name, MSRP__c, Description__c,Category__c, Picture_URL__c FROM Car__c' + whereClause + ' WITH SECURITY_ENFORCED' + ' ORDER BY Name';
        return Database.query(query);
      } catch (Exception e) {return null;
          //throw new AuraHandledException(e.getMessage());
      }
  }
  @AuraEnabled(cacheable=true)
  public static list<Account> getAccounts(){
      return [select id,Name from account];

  }
    
}