const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const shortenUrl = document.querySelector("#shortenUrl");

btn.addEventListener("click", async () => {
    console.log("clicked");
    const url = input.value;
    await getUrl(url);

});


const getUrl = async (site) => {
    try {
        const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${site}`)

        const data = await response.json();

        console.log(data.result.full_short_link);

        shortenUrl.innerHTML = data.result.full_short_link;

    } catch (error) {
        console.log(error);   
        alert('Please input a valid url.');
    }
}