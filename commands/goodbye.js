async function sayGoodbye(sock, chatId, removedMembers) {
    let goodbyeText = 'Goodbye ';
    removedMembers.forEach((member) => {
        goodbyeText += ` `;
    });
    goodbyeText += '';

    await sock.sendMessage(chatId, {
        text: goodbyeText,
        mentions: removedMembers
    });
}

module.exports = sayGoodbye;
