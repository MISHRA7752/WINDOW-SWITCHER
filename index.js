const box = document.getElementById("box");
// refring  html element above
const image = document.getElementById("image");
const tab_switcher = document.getElementById("tab-switcher");

const list = new Linkedlist();

const data = [
    { title: "Chrome", value: "This is a window that contains chrome", url: "https://cdn.vox-cdn.com/thumbor/eG32HnbPci_k88_8A_HXS3-pnB8=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/6676117/chromelogo.0.jpg" },
    { title: "VS code", value: "This is a window that contains VS Code", url: "https://user-images.githubusercontent.com/49339/32078127-102bbcfe-baa6-11e7-8ab9-b04dcad2035e.png" },
    { title: "Sublime", value: "This is a window that contains Sublime text 2", url: "https://cdn.dribbble.com/users/533705/screenshots/3811091/sublime-icon.png" },
    { title: "Final Cut", value: "This is a window that contains Final Cur Pro X", url: "https://i.pcmag.com/imagery/reviews/00FaQZAwQoZwxbFpiehSYlN-21.fit_scale.size_1028x578.v_1569473012.png" },
    { title: "Photos", value: "This is a window that contains Photos", url: "https://i.pcmag.com/imagery/reviews/01JBzqHYl37ch2AaT3qOR9H-10.fit_scale.size_1028x578.v_1569475171.png" },
    { title: "Calendar", value: "This is a window that contains Calendar", url: "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/calendar-512.png" },
    { title: "Maps", value: "This is a window that contains Maps", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/AppleMaps_logo.svg/1200px-AppleMaps_logo.svg.png" }
];


for (let i in data)
    list.add({ id: i });

tab_switcher.hidden = true;
// initally hidden
let tabbable = false;
// pressing b wont affect

let point, children, offset;
// point to currnt and moves --- items below are childrenss --- distence b/w head and current node


setState();

document.addEventListener('keydown', function(e) {
    console.log(e);
    if (e.key === "Control") {
        tabbable = true; 
        //  make  tabbale true
        point = list.head;
        // will show  head
    }
    if ((e.key === "b") && tabbable) {
        tab_switcher.hidden = false;
        let key = e.key; // store current pressed key.
        let dataSize = data.length; // store total size of data array

        children[offset].classList.remove("sel");//removes functionallity from prev 
        point = point.next;
        offset =((offset + 1) % dataSize);
        children[offset].classList.add("sel");//add functionallity to next 
    }
});
document.addEventListener("keyup", function(e) {
    if (e.key === "Control") {
        tabbable = false;
        list.move_to_front(point);
        tab_switcher.hidden = true;
        setState();
    }
});
function setState() {
    image.src = data[list.head.content.id].url;
    title.innerHTML = data[list.head.content.id].title;
    box.innerHTML = data[list.head.content.id].value;

    tab_switcher.innerHTML = "";

    let temp = list.head;

    do{
        tab_switcher.innerHTML += `<li class="list-group-item"><img src="${data[temp.content.id].url}"><p>${data[temp.content.id].title}</p></li>`;
        temp = temp.next;
    }while(temp !== list.head);

    children = tab_switcher.childNodes;
    children[0].classList.add("sel");
    offset = 0;
}