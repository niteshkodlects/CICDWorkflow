Public class AccountHandler{
	
		Public static void afterInsertUpdateContactPhone(List<account> accounts,List<account> accounts1,List<account> account2,List<account> account4,
                                                        List<account> accounts4,List<account> accounts5,List<account> accountsm,List<account> accounts6,
                                                        List<account> accounts9,string q,string w,string e,string r,string t,string y,string u,string i,
                                                         
                                                         string o,string p,string a,string s,string d,string hh,string ss,string sss,string ll,
                                                         string ssss,string ak,string sd, string sssso,string ako,string sdo
                                                         
                                                        ){
			Map<id,account> mapOfAccountVsID=new Map<id,Account>();
			For(account account:accounts){
			If(account.Phone!= Null)
			mapOfAccountVsId.put(account.id,account);
			} 
			
			List<contact> contactstobeUdpated=new List<contact>();
			
			For(contact[] contact:[select id,phone ,accountid from contact where accountId in:mapOfAccountVsID.keyset()]){
			
				If(mapOfAccountVsID.containsKey(contact[0].Accountid)){
				
				contactstobeUdpated.add(new contact(id=contact[0].id,phone=mapOfAccountVsID.get(contact[0].accountid).phone));
                }
            }
			
			If(contactstobeUdpated.size()>0){
			Update contactstobeUdpated;
            }
		}
		
    
    
    public account getSuperParent(account account){
        if(Limits.getQueries() <= Limits.getLimitQueries()){
                    return getParentAccount(account);

        }else{
         // throw excpeiotn
			 return getParentAccount(account);
        }
    }
    
    public account getParentAccount(account account){
        if(account.parentId!= null){
           list<account> accounts=[select id,parentid from account where id=:account.ParentId Limit 1];
           return getParentAccount( accounts[0]);
        }
        return account;
    }
    
    
	}