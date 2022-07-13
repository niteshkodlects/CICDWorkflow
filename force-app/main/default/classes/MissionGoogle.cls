public class MissionGoogle {
    public integer hour;
    
    public integer minute;
    
    public MissionGoogle(integer hour,integer minute){
        this.hour =hour;
        this.minute=minute;
    }
    
    public Decimal calculateAngle(){
        return Math.abs(hour-(minute/5))*30 ;
    }
    public integer numUniqueEmails(String[] emails) {
        Set<string> seen=new Set<string>();
        For(string email : emails){
            Integer i=email.indexof('@');
            String local=email.substring(0,i);
            String rest=email.substring(i);
            if(local.contains('+')){
                local=local.substring(0,local.indexof('+'));
                local=local.replaceAll('\\.','');
                Seen.add(local+rest);
            }
        }
        return seen.size();
    }
    
    
    Public string patternString(string ss,Integer k){
        string[] s=ss.toUpperCase().split('');
        
        string invertedString ='';
        integer count=0;
        For(integer i=s.size()-1;i>=0;){
            
            if(s[i] =='-'){
                i--;
            }else if(count != 0 && count== k){
                invertedString ='-'+invertedString ;
                count =0;
            }else{
                invertedString =s[i]+invertedString ;
                i--;
                Count++;
            }
        }
        return invertedString;
        
    }
    
    public integer LengthOfLongestSubstring(string s) {
        set<string> seen=new set<string>();
        integer startWin=0,endWin=0,count=0;
        while(endWin<s.length()){
            if(seen.contains(s.substring(endWin,endWin+1))){
                seen.remove(s.substring(startWin,startWin+1));
                startWin++;
                
            }else{
                seen.add(s.substring(endWin,endWin+1));
                endWin++;
                count=Math.Max(count,seen.size());
            }
        }
        return count;
    }
    
    
    
}