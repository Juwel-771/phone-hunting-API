const loadData = async (searchPhone) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchPhone}`);
    const data = await res.json();
    const phones = data.data;
    // console.log(phones);
    display(phones);
}

const display = (phones) => {
    const phoneContainer = document.getElementById('phone-container');

    // clear after every search
    phoneContainer.innerHTML = "";
    // console.log(phones)
    phones.forEach(phone => {
        console.log(phone);
        const phoneCard = document.createElement("div");
        phoneCard.classList = `card bg-gray-100 w-96 p-4 shadow-xl border-2 border-violet-800`;
        phoneCard.innerHTML = `
        <figure>
            <img src="${phone.image}" alt="Shoes" />
        </figure>
        <div class="card-body">
            <h2 class="card-title">${phone.phone_name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
        `
        phoneContainer.appendChild(phoneCard)
    });
}

// Search Option Handle
const handleSearch = () => {
    const searchField = document.getElementById("search-field");
    const searchValue = searchField.value;
    loadData(searchValue);
}


loadData();