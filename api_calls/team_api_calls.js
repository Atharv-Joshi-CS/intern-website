const url = "https://raw.githubusercontent.com/vikasrangaswamy/Contentstack/main/data/Card.json";

fetch(url)
.then(
    (response) => {
        return response.json()
    }
).then(
    (data) => {
        console.log(data)
        return data;
    }
).catch(
    (error) => {
        return error;
    }
);

// export {fetch}