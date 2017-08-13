$(document).ready(function() {
    console.log("Time page was opened:");
    var openPage = new Date()
    console.log("User opened page on: " + openPage);
    
    console.log("Max Percentage of page viewed:");
    $(window).on('scroll', function(event) {
        var scrollTop = $(window).scrollTop();
        var docHeight = $(document).height();
        var winHeight = $(window).height();
        var scrollPercent = (scrollTop) / (docHeight - winHeight);
        //helpful formula found online to calculate the percentage of the page scrolled using the round method in the built-in Math library
        var scrollPercentRounded = Math.round(scrollPercent*100);
        if (scrollPercentRounded > scrollPercentMax) {
            scrollPercentMax = scrollPercentRounded;
        }
    })
    //Have to define this outside of function so that it is a global variable and that we can call it at the end
    var scrollPercentMax = 0;
    
    console.log("Record Number of Vowels Entered in the Textarea:");
    var vowelCounter = 0;
    var letterCounter = 0;
    $('#theTextArea').on('keypress', function(event) {
        letterCounter++;
        var letter = event.key;
        var vowels = ['a','e','i','o','u'];
        for (var i = 0; i < vowels.length; i++) {
            //loop through vowels array to see if it has matched what was entered in the textarea
            if (vowels[i] === letter) {
                vowelCounter++;
            }
        }
    });
    
    console.log("Time Spent Hovering Over Each Element:");
    console.log("For the Header:");
    $('h1').on('mouseover', function(event) {
        var headingIn = event.timeStamp
        console.log('Mouse enters the heading at: ' + headingIn)
    });
    
    $('h1').on('mouseleave', function(event) {
        var headingOut = event.timeStamp
        console.log('Mouse leaves the heading at: ' + headingOut)
    });
    
    console.log("For the Paragraphs:");
    $('p').on('mouseover', function(event) {
        var paragraphIn = event.timeStamp
        console.log('Mouse enters the paragraph at: ' + paragraphIn )
    });
    
    $('p').on('mouseleave', function(event) {
        var paragraphOut = event.timeStamp
        console.log('Mouse leaves the paragraph at: ' + paragraphOut)
    });
  
    console.log("For Image 3:");
    //image3
    $('#grilled').on('mouseover', function(event) {
        var imageIn = event.timeStamp
        console.log('Mouse enters the image at: ' + imageIn)
    });
    
    //image3
    $('#grilled').on('mouseleave', function(event) {
        var imageOut = event.timeStamp
        console.log('Mouse leaves the image at: ' + imageOut)
    });
    
    console.log("For Image 2:");
    //image2
    $('#cheese-platter').on('mouseleave', function(event) {
        var imageIn = event.timeStamp
        console.log('Mouse leaves the image at: ' + imageIn)
    });
    
    //image2
    $('#cheese-platter').on('mouseleave', function(event) {
        var imageOut = event.timeStamp
        console.log('Mouse leaves the image at: ' + imageOut)
    });
    
    console.log("For Image 1:");
    //image1
    $('#swiss').on('mouseleave', function(event) {
        var imageIn = event.timeStamp
        console.log('Mouse leaves the image at: ' + imageIn)
    });
    
    //image1
    $('#swiss').on('mouseleave', function(event) {
        var imageOut = event.timeStamp
        console.log('Mouse leaves the image at: ' + imageOut)
    });
  
    console.log("Time Spent Hovering Over Button, And Which One User Clicked On:");
    $('.button').on('click', function(event) {
        var link = event.target.href;
        console.log('User clicked this link: ' + link)
    });
    
    console.log("Printing Metrics Collected, Once User Leaves the Page:");
    $(window).on('beforeunload', function() {
        //even though closePage has the same value as OpenPage, it is a different date because it is defined at the bottom, instead of the first thing at the top.
        var closePage = new Date();
        console.log('User left page: ' + pageEnd);
        console.log('Number of letters typed: ' + letterCounter);
        console.log('Number of vowels typed: ' + vowelCounter);
        //return scrollPercentMax at the end
        console.log('Highest percent of page user scrolled to: ' + scrollPercentMax);
    });
    
    //If they left the page by clicking a link, record which link they clicked. 
    //enable preserve log in Dev Tools
    
});