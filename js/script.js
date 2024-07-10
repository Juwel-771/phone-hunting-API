const loadData = async (searchPhone, isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchPhone}`);
    const data = await res.json();
    const phones = data.data;
    // console.log(phones);
    display(phones, isShowAll);
}

const display = (phones, isShowAll) => {
    const phoneContainer = document.getElementById('phone-container');

    // clear after every search
    phoneContainer.innerHTML = "";
    // console.log(phones)
    const showAll = document.getElementById("show-all_button");
    if(phones.length > 12 && !isShowAll){
        showAll.classList.remove("hidden")
    }else{
        showAll.classList.add("hidden")
    }
    // console.log("Is show all: ", isShowAll)

    if(!isShowAll){
        phones = phones.slice(0,12);
    }
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
    loadingSpin(false);
}

// Search Option Handle
const handleSearch = (isShowAll) => {
    loadingSpin(true);
    const searchField = document.getElementById("search-field");
    const searchValue = searchField.value;
    loadData(searchValue, isShowAll);
}

// Showing loading icon
const loadingSpin = (isLoading) => {
    const loadSpin = document.getElementById("load-spin");
    if(isLoading){
        loadSpin.classList.remove("hidden");
    }else{
        loadSpin.classList.add("hidden");
    }
}

// Show All Button
const handleShowAll = () => {
    handleSearch(true);
}

loadData();