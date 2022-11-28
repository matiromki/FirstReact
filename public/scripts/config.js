
const mediaQuery = window.matchMedia('(max-width: 1300px)')
function handleTabletChange(e) {
    var a = document.getElementById("my-event-block-list");
    if (a) {
        if (e.matches) {
            document.getElementById("my-event-block-list").classList.remove('uk-child-width-1-4@s');
            document.getElementById("my-event-block-list").classList.add('uk-child-width-1-3@s');
        }
        else {
            document.getElementById("my-event-block-list").classList.add('uk-child-width-1-4@s');
            document.getElementById("my-event-block-list").classList.remove('uk-child-width-1-3@s');
        }
    }   
}
mediaQuery.addListener(handleTabletChange)
handleTabletChange(mediaQuery)


var b = document.getElementById('create-img-file');
if (b) {;
    var c = document.getElementById("create-img-file-button")
    b.addEventListener('change', function(){
        if( this.value ){
          console.log(b);
          console.log( "Оппа, выбрали файл!" );
          c.innerHTML = "Файл выбран"
        } else { // Если после выбранного тыкнули еще раз, но дальше cancel
          console.log( "Файл не выбран" ); 
        }
      });
}


function getFormValue(event) {
    event.preventDefault(); 
}
const form = document.getElementById("create-event-form");

      form.addEventListener("submit", (e) => {
        // this is used only for this example, 
        // to prevent submission of the form
        // so you can inspect the data below
        e.preventDefault();

        // you can pass "form" or "e.target" to FormData
        console.log(Object.fromEntries(new FormData(e.target)));
        console.log(Object.fromEntries(new FormData(form)));
        // { a: "foo", b: "bar", c: "baz" }
      });

