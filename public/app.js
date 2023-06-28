const input = document.querySelector("#input");
const btn = document.querySelector("#btn");

btn.addEventListener("click", async () => {
    console.log("clicked");
    const url = input.value;
    await getUrl(url);
});


const getUrl = async (site) => {
    try {
        const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${site}/very/long/link.html`)

        const data = response.json();
        console.log(data.result.full_short_link);
    } catch (error) {
        console.log(error);   
    }
}