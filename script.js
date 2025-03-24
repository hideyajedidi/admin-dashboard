document.getElementById("toggle-btn").addEventListener("click", function () {
    const sidebar = document.querySelector(".sidebar");
    const mainContent = document.querySelector(".main-content");

    if (sidebar.style.width === "200px" || sidebar.style.width === "") {
        sidebar.style.width = "0";
        mainContent.style.marginLeft = "0";
    } else {
        sidebar.style.width = "200px";
        mainContent.style.marginLeft = "200px";
    }
});
