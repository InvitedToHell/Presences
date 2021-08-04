const presence = new Presence({
    clientId: "871377444882501652"
}), browsingStamp = Math.floor(Date.now() / 1000);
presence.on("UpdateData", () => {
    const presenceData = {
        largeImageKey: "ares",
        details: "aresclient.com"
    };
    presenceData.startTimestamp = browsingStamp;
    if (document.location.pathname.startsWith("/download"))
        presenceData.details = "Downloading Ares";
    else if (document.location.pathname.startsWith("/screenshots"))
        presenceData.details = "Viewing screenshots";
    else if (document.location.pathname.startsWith("/cosmetics"))
        presenceData.details = "Viewing cosmetics";
    else if (document.location.pathname.startsWith("/start"))
        presenceData.details = "Viewing homepage";
    else if (document.location.pathname.startsWith("/"))
        presenceData.details = "Viewing homepage";
    if (!presenceData.details) {
        presence.setTrayTitle();
        presence.setActivity();
    }
    else
        presence.setActivity(presenceData);
});
