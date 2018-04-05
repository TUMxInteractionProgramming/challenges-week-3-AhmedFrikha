function test(){
    console.log("alive");
}

function switchChannel(channelName){
    console.log("Tuning into channel"+channelName);
    document.getElementById('channel-name').innerHTML=channelName;
     document.getElementById('channel-location').innerHTML='<small>by <a href="http://w3w.co/upgrading.never.helps" target="_blank"><strong>upgrading.never.helps</strong></a></small>';
     $('#channel-star').attr('src', 'http://ip.lfe.mw.tum.de/sections/star-o.png');
    $('#channels li').removeClass('selected');
    $('#channels li:contains('+ channelName +')').addClass('selected');
}
function star(){
    $('#channel-star').attr('src', 'http://ip.lfe.mw.tum.de/sections/star.png');
}

function selectTab(tabId){
    $('#tab-bar button').removeClass('selected');
    console.log('Changing to tab', tabId);
    $(tabId).addClass('selected');
    
}

function toggleEmojis(){
    console.log('toggling emojis');
    $('#emojis').toggle();
}