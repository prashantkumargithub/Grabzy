var dropdownContainer = document.getElementById('dropdown-container');
var dropdownMenu = document.getElementById('dropdown-menu');
var icon = document.querySelector('#options-menu svg');

// Toggle dropdown menu on button click
dropdownContainer.addEventListener('click', function () {
    dropdownMenu.classList.toggle('hidden');
    icon.classList.toggle('rotate-180');
});


var dot_btn = document.getElementById('dot');
var dropdowndot = document.getElementById('dropdown-dot');

dot_btn.addEventListener('click', function () {
    dropdowndot.classList.toggle('hidden');
})


const navbtn = document.querySelector("#nav_btn");
const nav_menu = document.querySelector('#nav_menu');

navbtn.addEventListener('click', () => {
    nav_menu.classList.toggle('nav-is-open');
});



// Variable naming: changed backToTopButton to backToTopBtn for consistency
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    var backToTopBtn = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}

function backToTop() {
    const scrollToTop = () => {
        const c = document.documentElement.scrollTop || document.body.scrollTop;
        if (c > 0) {
            window.requestAnimationFrame(scrollToTop);
            window.scrollTo(0, c - c / 8);
        }
    };
    scrollToTop();
}


function remove() {
    document.getElementById('banner').classList.add('hidden');
}


//Product 
fetch('product.json')
.then(response => response.json())
.then(data=>{
    const container = document.getElementById('prodcut-container');
    const container2 = document.getElementById('prodcut-container2');

    //maping 

    data.forEach(product => {
        const prodcutContainer = document.createElement('div');
        prodcutContainer.className = 'group  relative  border border-gray-500 p-3 rounded-lg';
        prodcutContainer.innerHTML = `
         <div class="">
                            <div
                                class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img src=${product.image}
                                    alt="Front of men&#039;s Basic Tee in black."
                                    class="h-full w-full object-cover object-center lg:h-full lg:w-full">
                            </div>
                            <div class="mt-4 flex justify-between">
                                <div>
                                    <h3 class="text-lg text-gray-700">
                                        <a href="#">
                                            <span aria-hidden="true" class="absolute inset-0"></span>
                                            ${product.title}
                                        </a>
                                    </h3>
                                    <div class="flex items-center">
                                        <a href="#"
                                            class=" text-sm font-medium text-indigo-600 hover:text-indigo-500">${product.rating.count}
                                            reviews</a>
                                    </div>
                                </div>
                                <p class="text-sm font-medium text-gray-900">${product.price}</p>
                            </div>
                        </div>
        `;
        container.appendChild(prodcutContainer);

    });
})


