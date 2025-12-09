/*
Name: Ryan Sami Salim Makarem
File: main.js
Date: 8th December 2025
This files purpose is to solve a number of accessibility issues
*/

// Functionality for showing/hiding the comments section
const showHideBtn = document.querySelector('.show-hide');
const commentWrapper = document.querySelector('.comment-wrapper');
const list = document.querySelector('.comment-container'); 

commentWrapper.style.display = 'none';

showHideBtn.onclick = function() {
    let showHideText = showHideBtn.textContent;
    if(showHideText === 'Show comments') {
        showHideBtn.textContent = 'Hide comments';
        commentWrapper.style.display = 'block';
    } else {
        showHideBtn.textContent = 'Show comments';
        commentWrapper.style.display = 'none';
    }
};

// Functionality for adding a new comment via the comments form
const form = document.querySelector('.comment-form');
const nameField = document.querySelector('#name');
const commentField = document.querySelector('#comment');

form.onsubmit = function(e) {
    e.preventDefault();
    submitComment();
};

function submitComment() {
    const nameValue = nameField.value;
    const commentValue = commentField.value;

    if (nameValue.trim() === '' || commentValue.trim() === '') {
        alert('Please enter both your name and a comment.');
        return;
    }
    
    const listItem = document.createElement('li');
    const namePara = document.createElement('p');
    const commentPara = document.createElement('p');

    namePara.textContent = nameValue;
    commentPara.textContent = commentValue;

    list.appendChild(listItem);
    listItem.appendChild(namePara);
    listItem.appendChild(commentPara);

    nameField.value = '';
    commentField.value = '';
}

document.onkeydown = (e) => { 
    if (e.key === "Enter") {
        if (document.activeElement === showHideBtn) {
            e.preventDefault(); 
            document.activeElement.click(); 
        }
    }
};