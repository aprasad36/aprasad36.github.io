// Shared sidebar component
// Include this script in any page and add <aside id="sidebar-container"></aside>
// The sidebar will be injected automatically.

function loadSidebar() {
    const sidebar = document.getElementById('sidebar-container');
    if (!sidebar) return;

    sidebar.className = 'sidebar';
    sidebar.innerHTML = `
        <svg class="header-pattern" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <defs>
                <pattern id="complex-tessellation" x="-35" y="0" width="200" height="200"
                    patternUnits="userSpaceOnUse">
                    <!-- Large diamond -->
                    <path d="M100,0 L200,100 L100,200 L0,100 Z" fill="none" stroke="#ffffff" stroke-width="2" />
                    <!-- Smaller diamonds -->
                    <path d="M50,50 L100,0 L150,50 L100,100 Z" fill="none" stroke="#ffffff" stroke-width="1.5" />
                    <path d="M50,150 L100,100 L150,150 L100,200 Z" fill="none" stroke="#ffffff" stroke-width="1.5" />
                    <path d="M0,100 L50,50 L100,100 L50,150 Z" fill="none" stroke="#ffffff" stroke-width="1.5" />
                    <path d="M100,100 L150,50 L200,100 L150,150 Z" fill="none" stroke="#ffffff" stroke-width="1.5" />
                    <!-- Triangles -->
                    <path d="M50,50 L100,0 L100,50 Z" fill="none" stroke="#ffffff" stroke-width="1" />
                    <path d="M150,50 L200,0 L200,100 Z" fill="none" stroke="#ffffff" stroke-width="1" />
                    <path d="M50,150 L0,200 L0,100 Z" fill="none" stroke="#ffffff" stroke-width="1" />
                    <path d="M150,150 L100,200 L200,200 Z" fill="none" stroke="#ffffff" stroke-width="1" />
                    <!-- Squares -->
                    <rect x="75" y="75" width="50" height="50" fill="none" stroke="#ffffff" stroke-width="1" />
                    <rect x="25" y="75" width="50" height="50" fill="none" stroke="#ffffff" stroke-width="1" />
                    <rect x="125" y="75" width="50" height="50" fill="none" stroke="#ffffff" stroke-width="1" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#complex-tessellation)" />
        </svg>
        <div class="sidebar-content">
            <img src="./images/profile/Profile Picture.jpg" alt="Aditya Prasad" class="profile-pic">
            <h1>Aditya Prasad</h1>
            <li class="sidebar-item nav-hiddev">
                <p>adityaprasad [at] uchicago.edu</p>
            </li>
            <nav>
                <ul>
                    <li class="sidebar-item"><a href="./index.html#about">About</a></li>
                    <li class="sidebar-item"><a href="./index.html#publications">Publications</a></li>
                    <li class="sidebar-item"><a href="./index.html#manuscripts">Manuscripts</a></li>
                    <li class="sidebar-item nav-hidden"><a href="./index.html#teaching">Teaching</a></li>
                    <li class="sidebar-item nav-hidden"><a href="./projects.html">Projects</a></li>
                    <li class="sidebar-item"><a href="./writing.html">Writing</a></li>
                </ul>
            </nav>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', loadSidebar);
