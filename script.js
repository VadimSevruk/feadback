let createReply = (num) => {
    var wrapper = document.getElementsByClassName('wrapperComment');
    var div = document.createElement("div");
        div.className = 'reply';
        div.innerHTML = '\
        <div class="icon icon__reply"></div>\
        <textarea name="your-comment__reply" class="your-comment your-comment__reply" placeholder="Your comment"></textarea>\
        ';
        wrapper[num].appendChild(div);
}

function addReply(num) {
    var checked = document.getElementsByClassName('reply');
    if (checked.length == 0) {
        createReply(num);
    } else {
        checked[0].remove();
        createReply(num);
    }
}

function changeReplies(num) {
    var wrapper = document.getElementsByClassName('wrapperComment');
    var div = document.createElement("div");
    div.className = 'replies';
    div.innerHTML = '\
    <div class="icon icon__reply"></div>\
    <div class="icon icon__reply"></div>\
    <div class="icon icon__reply"></div>\
    <div class="icon icon__reply"></div>\
    <div class="icon__reply add">+</div>\
    <div class="replies__amount comment__text_green">8 replise</div>\
    <p class="replies__view comment__time">View thread</p>\
    ';
    wrapper[num].appendChild(div);
}

function rechangeReplies(num) {
    var checked = document.getElementsByClassName('replies');
    checked[0].remove();
}
