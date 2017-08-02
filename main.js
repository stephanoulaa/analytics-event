$(document).ready(function() {
    
    var time
    var timeSite;
    //when user gets to page
    window.onload=function(){
        time=new Date();
    }
    //when use leaves the page
    window.onbeforeunload=function(){
        timeSite=new Date()-time;
    }
    //enable the option 'preserve log' (???)
    
    //show percent of page visited
    var scrollPercent = 100 * $(window).scrollTop() / ($(document).height() - $(window).height());
    
    //how long mouse has hovered over element
    $("#hover").hover(function(){ 
        var count= 0;
        //start counter
    }, function(){
        count++;
        //stop counter
        
    //calculate number of vowels in textarea:
    $('textarea').keyup(updateCount);
    $('textarea').keydown(updateCount);
    
    function updateCount() {
        var countVowels = $(this).val().length;
        $('#vowels').text(countVowels++);
    }    
    
    //record the link they clicked on if they left the page   
        
        
    
});
});