document.addEventListener("DOMContentLoaded",function () {
    
const each_projects = document.querySelectorAll('.each-projects__display');
const increase_btn = document.getElementById("increase-btn");
const decrease_btn = document.getElementById("decrease-btn");
const project_number_dsp = document.querySelectorAll(".each-project-number");
const view_more_about_projects__btns = document.querySelectorAll(".view_more_about_projects__btn");
const more_about_project_ctn = document.getElementById("more_about_project_ctn");


// EVERYTHING ABOUT DISPLAY OF PROJECT
function active_display() {

    let active_index = 0;
    let project_number=0;
   

    
        // to control page display (called latter by increment and decrement function)
        function control_page_display(project_number) {
            each_projects.forEach(project => {
                project.style.display="none";
            });
            each_projects[project_number].style.removeProperty("display");
        }

        // to get the total index
        function get_total_index() {
            total_index = each_projects.length;
        }
        get_total_index();

        // to show the project number

        function show_project_number(number,total) {
            project_number_dsp.forEach(element => {
                element.innerHTML=`${number}/${total}`;
            });
        }

        
        //   to view project in ascending order 
        function increment_projects() {
            increase_btn.addEventListener("click",function() {
                active_index++;
                if (active_index > total_index-1) {
                    active_index = 0;
                }
                 control_page_display(active_index);
                 project_number = active_index + 1;
                 show_project_number(project_number,total_index);

            });
        
        }
        increment_projects();

        // view project in decreasing order 
        function decrement_project() {
            decrease_btn.addEventListener("click",function() {
                active_index--;
                if (active_index < 0) {
                    active_index = total_index-1;
                }
                control_page_display(active_index);
                project_number = active_index + 1;
                 show_project_number(project_number,total_index);
            });
        }
        decrement_project();

}

active_display();
// END OF EVEYRTHING ABOUT DISPLAY OF PROJECT 


// EVERY THING ABOUT VIEWING MORE ABOUT THE PROJECT


// shows the full description along side the mobile view 
function about_project(title,project__description,features__1,features__2,features__3,image) {
    more_about_project_ctn.innerHTML=``;
    more_about_project_ctn.style.removeProperty("display");
    more_about_project_ctn.innerHTML=
                                    `
                                    <div class="more_abt_project__partition">
                                        <div class="project_pic_partition" style="background-image: url(${image});" id="project_pic_partition"><button id="cancel_view_mobile_btn">X</button></div>
                                        <div class="project_about_Partition">
                                            <h1>${title}</h1>
                                            <p>${project__description}</p>
                                            <div>
                                                <span>${features__1}</span> <span>${features__2}</span> <span>${features__3}</span>
                                            </div>
                                            <button class="back_btn" id="back_btn">
                                                <a>
                                                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12l4-4m-4 4 4 4"/>
                                                    </svg>
                                                </a>
                                                back to view others 
                                            </button>
                                            <button class="view_mobile_version_btn">
                                                <a>
                                                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                                <path fill-rule="evenodd" d="M5 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4Zm12 12V5H7v11h10Zm-5 1a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z" clip-rule="evenodd"/>
                                                </svg>
                                                </a>
                                            View mobile version
                                            </button>
                                        </div>
                                    </div>
                                    
                                    `;
    view_mobile_version();
    cancel_mobile_view();
    go_back();
    
   
}


function go_back() {
    const back_btn = document.getElementById("back_btn");
    back_btn.addEventListener("click",function () {
        setTimeout(() => {
             more_about_project_ctn.style.display="none"; 
        }, 100);
      
    });
}

// to view mobile version.
function view_mobile_version() {
   const  btns = document.querySelectorAll(".view_mobile_version_btn");
   const mobile_views  = document.getElementById("project_pic_partition");
        btns.forEach(btn => {
                btn.addEventListener("click",function(){
                    setTimeout(() => {
                        mobile_views.style.display="flex";
                    }, 100);
                        

                });
        });
}
view_mobile_version();

// to cancel the mobile view 
function cancel_mobile_view() {
    const btn = document.getElementById("project_pic_partition");
    const mobile_views  = document.getElementById("project_pic_partition");
        btn.addEventListener("click",function () {
            setTimeout(() => {
                     mobile_views.style.display="none";
            }, 100);
           
        });
} 









function view_more_project_details() {
    view_more_about_projects__btns.forEach(element => {
        element.addEventListener('click',function(){

            let title = element.getAttribute("data-project__title");
            let project__description = element.getAttribute("data-project__description");
            let features__1 = element.getAttribute("data-features__1");
            let features__2 = element.getAttribute("data-features__2");
            let features__3 = element.getAttribute("data-features__3");
            let image = element.getAttribute("data-image");
            
            // function to show the description 
            about_project(title,project__description,features__1,features__2,features__3,image);
        });
    });
}
view_more_project_details();



function let_build_it() {
    const btns = document.querySelectorAll(".let_build_it__btn");
        btns.forEach(element => {
            element.addEventListener("click",function () {
                window.location.href="mailto:dkurobokekeme@gmail.com";
            });
        });
}
let_build_it();


function visit_site_url() {
    const btns = document.querySelectorAll(".visit_site_btn");
    btns.forEach(element => {
        element.addEventListener("click",function(){
                const site_url = element.getAttribute("data-site_url");
                if (site_url === "") {
                    window.alert("site still in production and would be released soon");
                }
                else{
                    window.location.href=`${site_url}`;
                }
        });
    });
}
visit_site_url();



});





