const INFO = {
  main: {
    title: "Prakasa Judha",
    name: "Prakasa Judha",
    email: "prakasajudha@gmail.com",
    logo: "/logo-prakas.png",
  },

  socials: {
    github: "https://github.com/youngc0dex",
    linkedin: "https://www.linkedin.com/in/prakasa-judha-71858a134/",
    instagram: "https://www.instagram.com/prakasajudha/",
    facebook: "https://www.facebook.com/prakasajudha/",
  },

  homepage: {
    title: (
      <span className="homepage-title-class">
        Hi!, Im a <br /> Fullstack Web Developer
      </span>
    ),
    description: (
      <p className="homepage-description">
        I'm a passionate fullstack web developer specializing in the{" "}
        <span className="homepage-description-strong">
          JavaScript ecosystem
        </span>
        . I build{" "}
        <span className="homepage-description-strong">
          scalable, secure, and high-performance web applications
        </span>{" "}
        using{" "}
        <span className="homepage-description-strong">
          modern frameworks and best practices
        </span>
        . Whether it's crafting{" "}
        <span className="homepage-description-strong">clean frontends</span> or
        architecting{" "}
        <span className="homepage-description-strong">
          solid backend systems
        </span>
        , I love turning ideas into real-world solutions.{" "}
        <span className="homepage-description-strong">Problem-solving</span> is
        my playground, and I'm always excited to{" "}
        <span className="homepage-description-strong">
          learn, grow, and take on new challenges
        </span>{" "}
        that push my limits as a developer.
      </p>
    ),
  },
  about: {
    title: (
      <>
        Hi, I'm
        <br />
        Ngakan Made Prakasa Judha
      </>
    ),
    description: (
      <>
        I'm a developer who loves turning ideas into{" "}
        <span className="animated-underline">clean</span>,{" "}
        <span className="animated-underline">scalable</span>, and{" "}
        <span className="animated-underline">pixel-perfect interfaces</span>.{" "}
        With over{" "}
        <span className="animated-underline">3 years of experience</span>, I've
        contributed to{" "}
        <span className="animated-underline">enterprise systems</span>,{" "}
        <span className="animated-underline">real-time apps</span>, and{" "}
        <span className="animated-underline">public platforms</span> using{" "}
        <span className="animated-underline">React</span>,{" "}
        <span className="animated-underline">Next.js</span>, and{" "}
        <span className="animated-underline">modern frontend tools</span>.
        <br />
        <br />
        I'm a big fan of{" "}
        <span className="animated-underline">collaboration</span>,{" "}
        <span className="animated-underline">code quality</span>, and{" "}
        <span className="animated-underline">
          constantly learning something new
        </span>
        . Whether it's building from scratch or improving what's already there,
        I'm all about crafting{" "}
        <span className="animated-underline">smooth user experiences</span> that
        make an impact.
        <br />
        <br />
        Outside of coding, I'm an{" "}
        <span className="animated-underline">explorer at heart</span> — I enjoy{" "}
        <span className="animated-underline">hiking</span>,{" "}
        <span className="animated-underline">discovering new places</span>, and{" "}
        <span className="animated-underline">
          trying things I've never done before
        </span>
        . I believe that{" "}
        <span className="animated-underline">curiosity fuels creativity</span>,
        both in life and in code. If you're into creating{" "}
        <span className="animated-underline">meaningful digital products</span>{" "}
        (or trading hiking stories), let's connect and make it happen!
      </>
    ),
  },

  skill: {
    title: "Stack That I Use",
    skills: [
      {
        title: "JavaScript",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      },
      {
        title: "HTML",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg",
      },
      {
        title: "CSS",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg",
      },
      {
        title: "PostgreSQL",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg",
      },
      {
        title: "MongoDB",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg",
      },
      {
        title: "React",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg",
      },
      {
        title: "Next.js",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg",
      },
      {
        title: "Node.js",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
      },
      {
        title: "Express.js",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg",
      },
      {
        title: "PHP",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
      },
      {
        title: "Laravel",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original-wordmark.svg",
      },
    ],
  },

  articles: {
    title:
      "I'm passionate about pushing the boundaries of what's possible and inspiring the next generation of innovators.",
    description:
      "Chronological collection of my long-form thoughts on programming, leadership, product design, and more.",
  },

  projects: [
    {
      id: 1,
      title: "Bio Farma | Q100+",
      description:
        "Q100+ is a digitalization platform for the production area, encompassing the production process, testing, and product release. It is integrated with equipment to ensure data integrity, thereby providing information that aids decision-making.",
      logo: "q100-logo.png",
      linkText: "View Project",
      type: "in-progress",
      images: [
        "/projects/q100-1.png",
        "/projects/q100-2.png",
      ],
      stack: [
        { title: "React Js", bgColor: "#61dafb", textColor: "#282c34" },
        { title: "Chakra UI", bgColor: "#319795", textColor: "#ffffff" },
        { title: "Express Js", bgColor: "#000000", textColor: "#ffffff" },
        { title: "Node Js", bgColor: "#68a063", textColor: "#ffffff" },
        { title: "PostgreSQL", bgColor: "#336791", textColor: "#ffffff" },
      ],
      role: "Fullstack Developer",
      summary: (
        <>
          <span>
            <strong>Q100+</strong> is a digital transformation initiative aimed
            at modernizing the production floor by replacing paper-based and
            manual processes with a fully integrated web platform. The platform
            covers the entire production lifecycle—from execution, quality
            testing, to final product release—while ensuring data integrity
            through tight integration with industrial equipment and sensors. The
            main challenge was to develop a system that could operate reliably
            in demanding environments where internet connection is unstable,
            users require real-time visibility, and traceability is critical.
          </span>
          <br />
          <br />
          <span>
            As the Lead Frontend Developer, I was responsible for guiding a team
            of five developers and setting the technical direction of the
            frontend layer. We adopted a modern stack consisting of{" "}
            <strong>React.js</strong> for the UI, <strong>Redux</strong> for
            handling complex and shared application state,{" "}
            <strong>Chakra UI</strong> for fast and consistent component
            development, and <strong>Firestore</strong> as our real-time NoSQL
            backend. The first phase focused on building the Production
            Execution System, which allowed operators to log, track, and update
            work orders in real-time, directly from the shop floor.
          </span>
          <br />
          <br />
          <span>
            To support system configurability, we developed a dynamic
            Configuration Management module that allowed administrators to
            define workflows, machine mappings, and product test parameters
            without hardcoding. This was a crucial feature to ensure the system
            could scale across different manufacturing lines with minimal
            engineering effort.
          </span>
          <br />
          <br />
          <span>
            Recognizing the importance of stability and performance in
            low-connectivity environments, I initiated an offline mode using{" "}
            <strong>Service Workers</strong> and Firestore's local persistence.
            This ensured uninterrupted operations even when the network went
            down—data would sync seamlessly once connectivity was restored. We
            also integrated Firestore's real-time capabilities to provide
            instant notifications and form updates, which were critical for
            collaborative tasks and QA monitoring.
          </span>
          <br />
          <br />
          <span>
            From an engineering standpoint, I created a custom{" "}
            <strong>ESLint</strong> and <strong>Prettier</strong> configuration
            tailored to the project's architecture, established our Git
            branching and pull request strategy, and integrated{" "}
            <strong>SonarQube</strong> for continuous code quality and security
            scanning. I also promoted code modularization and lazy loading to
            optimize performance for devices with limited resources.
          </span>
          <br />
          <br />
          <span>
            Overall, <strong>Q100+</strong> is not just a web app—it's a robust,
            real-time production solution designed for high reliability and
            adaptability. My role combined technical leadership, architecture
            design, and hands-on development to deliver a system that supports
            day-to-day operations and long-term scalability for manufacturing
            environments.
          </span>
        </>
      ),
      exciting_part: (
        <>
          <ul>
            <li>
              <strong>Implemented offline-first capabilities</strong> using
              Service Workers and Firestore local persistence.
            </li>
            <li>
              Set up <strong>Firestore real-time listeners</strong> for instant
              UI updates on form submissions and notifications.
            </li>
            <li>
              Introduced a <strong>strict coding standard</strong> with linting
              and formatting rules.
            </li>
            <li>
              Integrated CI pipelines with SonarQube for security baseline
              enforcement.
            </li>
            <li>
              Created <strong>reusable UI patterns</strong> using Chakra UI.
            </li>
            <li>
              <strong>Modularized features</strong> and used lazy loading for
              better performance in low-resource environments.
            </li>
            <li>
              Defined <strong>API interaction patterns</strong> and optimized
              data-fetching logic for reduced load and increased frontend
              responsiveness.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 2,
      title: "Pertamina | Tracease",
      description:
        "TracEase is a cutting-edge system specifically designed to oversee every stage of LPG gas cylinder distribution with a more structured management approach. Its primary goal is to ensure integrity while enhancing safety factors in the distribution of LPG cylinders. Through a real-time approach, TracEase provides instant access to information about inventory, location, and the current status of each gas cylinder.",
      logo: "tracease-logo.png",
      linkText: "View Project",
      type: "in-progress",
      stack: [
        { title: "React Js", bgColor: "#61dafb", textColor: "#282c34" },
        { title: "Next Js", bgColor: "#000000", textColor: "#ffffff" },
        { title: "Tailwind CSS", bgColor: "#38b2ac", textColor: "#ffffff" },
      ],
      images: [
        "/projects/tracease-1.png",
        "/projects/tracease-2.png",
        "/projects/tracease-3.png",
        "/projects/tracease-4.png",
      ],
      role: "Frontend Developer",
      summary: (
        <>
          <span>
            <strong>TracEase</strong> is a comprehensive digital transformation
            initiative aimed at revolutionizing the LPG gas cylinder
            distribution process. The system is designed to replace traditional
            methods with a fully integrated platform that enhances operational
            safety, improves traceability, and ensures real-time visibility into
            inventory levels, distribution routes, and the current status of
            each cylinder.
          </span>
          <br />
          <br />
          <span>
            As the Lead Frontend Developer, I was responsible for guiding a team
            of three developers and setting the technical direction for the
            frontend architecture. We adopted a modern stack consisting of{" "}
            <strong>Next.js</strong> for server-side rendering and routing,{" "}
            <strong>React.js</strong> for building dynamic user interfaces,{" "}
            <strong>Redux Persist</strong> for managing complex application
            state, and <strong>Tailwind CSS</strong> for scalable and efficient
            styling. The first phase focused on developing a dynamic
            configuration management system, real-time dashboards, and seamless
            system integrations.
          </span>
          <br />
          <br />
          <span>
            To ensure system configurability and scalability, we developed a
            dynamic configuration management module that allowed administrators
            to define workflows, machine mappings, and product test parameters
            without hardcoding. This was crucial for scaling the system across
            different distribution lines with minimal engineering effort.
          </span>
          <br />
          <br />
          <span>
            Recognizing the importance of stability and performance in
            environments with fluctuating connectivity, I initiated the
            integration of Pertamina's SSO system, <strong>IDAMAN</strong>, for
            secure token validation and session persistence. We also
            collaborated closely with the backend team to establish a reliable{" "}
            <strong>API contract system</strong> that facilitated seamless
            communication and reduced frontend-backend miscommunication.
          </span>
          <br />
          <br />
          <span>
            From an engineering standpoint, I created a custom ESLint and
            Prettier configuration tailored to the project's architecture,
            established our Git branching and pull request strategy, and
            integrated SonarQube for continuous code quality and security
            scanning. I also promoted code modularization and lazy loading to
            optimize performance for devices with limited resources.
          </span>
          <br />
          <br />
          <span>
            Overall, <strong>TracEase</strong> is not just a logistics system—it's
            a robust, real-time monitoring solution designed for high reliability
            and adaptability. My role combined technical leadership, architecture
            design, and hands-on development to deliver a system that supports
            day-to-day operations and long-term scalability for the LPG
            distribution industry.
          </span>
        </>
      ),
      exciting_part: (
        <>
          <ul>
            <li>
              Designed and implemented the{" "}
              <strong>Action-Based Configuration Management System</strong> for
              logic-driven workflows without code changes.
            </li>
            <li>Built flexible dynamic forms and smart state handling.</li>
            <li>
              Integrated with Pertamina’s{" "}
              <strong>OAuth2-based SSO (IDAMAN)</strong> for secure token
              validation and session persistence.
            </li>
            <li>
              Established a reusable <strong>SonarQube security baseline</strong>{" "}
              for clean, secure code.
            </li>
            <li>
              Created a clear <strong>API contract system</strong> to reduce
              frontend-backend miscommunication.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 3,
      title: "Biofarma | Bio Meet",
      description:
        "Bio Meet is an event management application designed to assist companies in organizing events, tracking attendance effortlessly, and utilizing the data within the app for various company-related personnel management purposes.",
      logo: "biomeet-logo.png",
      linkText: "View Project",
      type: "completed",
      stack: [
        { title: "React Js", bgColor: "#61dafb", textColor: "#20232a" },
        { title: "Next Js", bgColor: "#000000", textColor: "#ffffff" },
        { title: "Tailwind CSS", bgColor: "#06b6d4", textColor: "#ffffff" },
        { title: "Express Js", bgColor: "#ffffff", textColor: "#000000" }, 
        { title: "PostgreSQL", bgColor: "#336791", textColor: "#ffffff" },
      ],
      images: [
        "/projects/biomeet-1.png",
        "/projects/biomeet-2.png",
        "/projects/biomeet-3.png",
        "/projects/biomeet-4.png",
      ],
      role: "Fullstack Developer",
      summary: (
        <>
          <span>
            <strong>Bio-Meet</strong> is an internal event management platform
            designed to help companies seamlessly organize and manage events,
            from scheduling to attendance tracking. The application allows HR
            teams and department leads to view event analytics, monitor
            attendance behavior, and utilize this data for internal evaluations
            and reporting. Its goal was to streamline event logistics and
            employee participation in a unified, efficient system.
          </span>
          <br />
          <br />
          <span>
            I <strong>single-handedly designed and developed the entire
            platform</strong>, from ideation to deployment. Built with{" "}
            <strong>Next.js</strong> for server-side rendering and routing,{" "}
            <strong>React.js</strong> for a responsive and dynamic user
            interface, and styled using both <strong>Tailwind CSS</strong> and{" "}
            <strong>Material UI</strong> for a clean, professional feel. The
            platform was made fully responsive to support usage across desktop,
            tablet, and mobile devices.
          </span>
          <br />
          <br />
        </>
      ),
	  exciting_part: (
		<>
			<ul>
				<li>
					<strong>Challenge:</strong> Created a flexible attendance tracking system adaptable to various event types like seminars and workshops.
				</li>
				<li>
					Implemented dynamic form logic and conditional flows based on event types and check-in policies.
				</li>
				<li>
					<strong>Accessibility:</strong> Ensured cross-device accessibility with mobile-first design and testing.
				</li>
				<li>
					Used responsive layouts and Material UI for consistent experiences across all screen sizes.
				</li>
				<li>
					<strong>Development:</strong> Established a design system and reusable component library for scalability and maintainability.
				</li>
			</ul>
		</>
	  )
    },
    {
      id: 4,
      title: "Bio Farma | PPID",
      description:
        "PPID is a public information service application related to Bio Farma. Its goal is to provide the public with an overview and insights into various aspects concerning Bio Farma.",
      logo: "biofarma-logo.png",
      linkText: "View Project",
      type: "in-progress",
      stack: [
        { title: "React Js", bgColor: "#61dafb", textColor: "#282c34" },
        { title: "Next Js", bgColor: "#000000", textColor: "#ffffff" },
        { title: "Strapi", bgColor: "#2f2e8b", textColor: "#ffffff" },
      ],
      images: [
        "/projects/ppid-1.png",
        "/projects/ppid-2.png",
        "/projects/ppid-3.png",
      ],
      role: "Fullstack Developer",
      summary: (
        <>
          <span>
            <strong>PPID</strong> is a public information service application
            developed for <strong>Bio Farma</strong>. It aims to enhance
            transparency and provide the public with access to information
            about the company’s operations, governance, and public services.
            The platform enables users to explore categorized content, request
            public data, and stay updated on the company's news and initiatives.
          </span>
          <br />
          <span>
            I was responsible for the development and maintenance of the entire
            application, focusing on performance, responsiveness, and
            accessibility. The frontend was built using <strong>React.js</strong>
            and <strong>Next.js</strong> for scalability and optimized rendering,
            while <strong>Tailwind CSS</strong> was employed to create a modern,
            mobile-friendly user interface. I ensured the application performed
            smoothly across all devices and screen sizes.
          </span>
          <br /><br />
          <span>
            For the backend, I utilized <strong>Strapi</strong> as the Content
            Management System, customizing it to fit the specific needs of Bio
            Farma’s information distribution workflow. This allowed the internal
            team to efficiently manage, update, and publish dynamic content
            directly from the CMS.
          </span>
          <br /><br />
        </>
      ),
      exciting_part: (
        <>
          <span>
            <strong>One of the most exciting parts</strong> was enhancing the <strong>Strapi-based CMS</strong> to support:
            <ul>
              <li>Dynamic public content, including real-time updates</li>
              <li>Role-based access</li>
              <li>Rich media integration</li>
            </ul>
            I customized the content types and API endpoints to ensure:
            <ul>
              <li>Smooth integration with the frontend</li>
              <li>Easy content control for the admins</li>
            </ul>
          </span>
          <span>
            I also focused on <strong>responsive design and accessibility</strong> by:
            <ul>
              <li>Ensuring seamless usability across desktops, tablets, and mobile devices</li>
              <li>Using <strong>Tailwind CSS</strong> to implement a fully responsive layout</li>
              <li>Implementing lazy loading for better performance</li>
              <li>Improving semantic markup to support accessibility tools like screen readers</li>
            </ul>
          </span>
        </>
      ),
    },
    {
      id: 5,
      title: "Bio Farma | BIND UI",
      description:
        "Unifying Excellence in Healthcare Design BIND (Biofarma Innovative Next-level Design) A comprehensive design system empowering Bio Farma Group's digital ecosystem, bridging innovation across Indonesia's leading pharmaceutical enterprises.",
      logo: "bind-logo.png",
      linkText: "View Project",
      type: "completed",
      stack: [
        { title: "React Js", bgColor: "#61dafb", textColor: "#282c34" },
        { title: "npmjs", bgColor: "#cb3837", textColor: "#ffffff" },
        { title: "JavaScript", bgColor: "#f7df1e", textColor: "#000000" },
      ],
      images: [
        "/projects/bind-1.png",
        "/projects/bind-2.png",
        "/projects/bind-3.png",
        "/projects/bind-4.png",
      ],
      role: "Supervisor / Project Manager",
      summary: (
        <>
          <span>
            <strong>BIND (Biofarma Innovative Next-level Design)</strong> is a comprehensive <strong>design system</strong> built to empower the digital ecosystem of the Bio Farma Group. This system was created to drive innovation and ensure consistent design and user experience across the digital products of one of Indonesia’s leading pharmaceutical enterprises.
          </span>
          <br />
          <br />
          <span>
            As a <strong>Design System Supervisor</strong>, I led the initiative to establish a scalable and reusable UI component library tailored specifically for <strong>React.js</strong> and <strong>Next.js</strong> projects. The core stack includes <strong>React</strong> for component logic and interaction, and <strong>Tailwind CSS</strong> for utility-first, responsive styling. The package was structured and published through <strong>npmjs</strong> to make it accessible across multiple internal teams and projects.
          </span>
          <br />
          <br />
          <span>
            The primary goal of BIND was to create a company-wide <strong>standardization in design and development</strong>—enabling consistent branding, faster UI development, and simplified collaboration between designers and developers. It now serves as the foundation for all future Bio Farma Group applications.
          </span>
        </>
      ),
      exciting_part: (
        <>
          <span>
            <ul>
              <li>
                <strong>One of the most exciting and strategic challenges</strong> was building a system flexible enough to cover various use cases across departments while maintaining design consistency.
              </li>
              <li>
                I worked closely with both design and engineering teams to convert Figma tokens into live components, ensuring pixel-perfect implementation.
              </li>
              <li>
                Publishing the system to <strong>npmjs</strong> also introduced interesting problems around versioning, modular structure, and semantic releases.
              </li>
              <li>
                I implemented a clear folder architecture, documentation standards, and integrated tooling for automated build and deployment—ensuring that the design system could scale smoothly with future project demands.
              </li>
            </ul>
          </span>
        </>
      )
    },
    {
      id: 6,
      title: "Manucentric",
      description:
        "ManuOrder is a quoting and ordering software for the woodworking industry. This is software made for millworkers by millworkers.",
      logo: "manucentric-logo.png",
      linkText: "View Project",
      type: "completed",
      stack: [
        { title: "React Js", bgColor: "#61dafb", textColor: "#282c34" },
        { title: "Tailwind CSS", bgColor: "#38b2ac", textColor: "#ffffff" },
      ],
      role: "Frontend Developer",
      images: [
        "/projects/manucentric-1.png",
        "/projects/manucentric-2.jpg",
        "/projects/manucentric-3.jpg",
        "/projects/manucentric-4.jpg",
      ],
      summary: (
        <>
          <span>
            <strong>ManuOrder</strong> is a modern quoting and ordering software designed specifically for the <strong>woodworking industry</strong>. Developed by millworkers for millworkers, it empowers shops to handle complex product configurations, generate accurate quotes, and manage production workflows efficiently—all from a single platform.
          </span>
          <br /><br />
          <span>
            I worked as a <strong>Frontend Developer</strong> on this project, focusing primarily on building and improving the user interface and managing dynamic content. Using <strong>React.js</strong>, <strong>Tailwind CSS</strong>, and various supporting libraries, I contributed to building scalable UI components, solving bugs, and ensuring the app delivered a smooth and intuitive user experience across devices.
          </span>
          <br /><br />
          <span>
            The UI is purpose-built to meet the unique needs of millworkers, allowing them to quote and customize detailed orders with ease. I collaborated closely with designers and backend developers to ensure every interaction felt seamless and production-ready.
          </span>
        </>
      ),
      exciting_part: (
        <>
          <ul>
            <li>
              <strong>One of the most exciting challenges</strong> was developing the <strong>Kanban board system</strong> to visualize and manage production tasks. It required advanced drag-and-drop features, dynamic status updates, and smooth animations—all synced in real-time with the backend to reflect accurate job progress.
            </li>
            <li>
              I also worked on building <strong>dynamic forms and order creation services</strong>—allowing users to define product specs and service needs on the fly. These forms adapt based on order type, material selection, and client inputs, which added a layer of complexity to the UI logic.
            </li>
            <li>
              Additionally, I helped implement the <strong>email notification system</strong>, ensuring customers and internal users receive timely updates for quotes, order confirmations, and status changes. This included templating, dynamic data mapping, and sending logic using the platform’s backend API.
            </li>
          </ul>
        </>
      )
    },
    {
      id: 7,
      title: "Cordelia Clinic",
      description:
        "Cordelia Clinic is an integrated application designed to streamline clinic operations by managing master data, stock opname, and the buying and selling of medicines and services. It helps clinic staff efficiently track inventory, manage patient prescriptions, and process transactions in real time. With features that ensure accurate stock management and seamless sales operations, Cordelia Clinic enhances clinic efficiency, reduces errors, and improves overall service delivery, creating a smoother experience for both staff and patients.",
      logo: "cordelia-logo.png",
      linkText: "View Project",
      type: "completed",
      stack: [
        { title: "Laravel", bgColor: "#ff2d20", textColor: "#ffffff" },
        { title: "Bootstrap", bgColor: "#563d7c", textColor: "#ffffff" },
        { title: "PHP", bgColor: "#777bb4", textColor: "#ffffff" },
        { title: "PostgreSQL", bgColor: "#336791", textColor: "#ffffff" },
      ],
      images: [
        "/projects/cordelia-1.png",
        "/projects/cordelia-2.png",
        "/projects/cordelia-3.png",
        "/projects/cordelia-4.png",
      ],
      role: "Fullstack Developer",
      summary: <>
          <span>
          <strong>Cordelia Clinic</strong> is an integrated web application developed to streamline various clinic operations such as <strong>master data management</strong>, <strong>stock opname</strong>, and <strong>buying/selling of medicines and services</strong>. This system was built with the goal of enhancing the clinic’s workflow efficiency and delivering a smoother experience for both staff and patients.
        </span>
        <br/><br/>
        <span>
          I was responsible for developing the core features of this application using <strong>PHP</strong>. The system allows clinic staff to manage patient prescriptions, track medicine stock levels in real time, and process transactions quickly and accurately. Every module was built with precision to ensure minimal errors during daily operations.
        </span>
        <br/><br/>
        <span>
          The application not only supports day-to-day clinic needs, but also serves as a scalable foundation for future feature expansion—making it a long-term digital asset for the organization.
        </span>
    </>,
    exciting_part: (
      <>
        <ul>
          <li>
            <span>
              <strong>The most exciting and technically challenging parts</strong> of the project involved building a robust <strong>real-time stock opname system</strong> that minimizes inventory errors and keeps stock levels synchronized across transactions.
            </span>
          </li>
          <li>
            <span>
              Another key challenge was designing the system to be user-friendly for non-technical clinic staff, while still handling complex workflows behind the scenes. This required thoughtful UI structuring and backend integration to ensure smooth operations at all touchpoints.
            </span>
          </li>
        </ul>
      </>
    ),
    },
    {
      id: 8,
      title: "Gradasigo",
      description:
        "Gradasigo is a dynamic platform for sharing and discovering articles, news, and insights. It allows users to contribute content as contributors or simply explore a wide range of topics as readers. The app provides an easy-to-use interface for publishing articles, enabling contributors to share their knowledge and ideas with a broader audience. For readers, Gradasigo offers a curated collection of engaging content, making it the go-to place for staying informed and connected with the latest trends and stories.",
      logo: "gradasigo-logo.png",
      linkText: "View Project",
      type: "completed",
      stack: [
        { title: "Laravel", bgColor: "#ff2d20", textColor: "#ffffff" },
        { title: "Bootstrap", bgColor: "#563d7c", textColor: "#ffffff" },
        { title: "PHP", bgColor: "#777bb4", textColor: "#ffffff" },
        { title: "PostgreSQL", bgColor: "#336791", textColor: "#ffffff" },
      ],
      images: [
        "/projects/gradasigo-1.png",
        "/projects/gradasigo-2.png",
        "/projects/gradasigo-3.png",
      ],
      role: "Fullstack Developer",
      summary: (
        <>
          <span>
            <strong>Gradasigo</strong> is a dynamic content-sharing platform built for both contributors and readers. It enables users to <strong>publish articles, share insights, and explore curated content</strong> across a wide range of topics. Designed with an intuitive and clean interface, the platform encourages meaningful contributions while making content discovery engaging and effortless for casual readers.
          </span>
          <br />
          <br />
          <span>
            The platform supports a flexible user role system, where contributors can write and manage their own posts, while readers can browse, bookmark, and interact with content. Gradasigo was built to be scalable, accessible, and community-driven, promoting thought leadership and conversation around trending topics and ideas.
          </span>
        </>
      ),
      exciting_part: (
        <>
          <ul>
            <li>
              <span>
                <strong>One of the most exciting aspects</strong> of this project was implementing the <strong>publishing flow</strong>—including draft saving, article previewing, and rich text formatting for contributors. Ensuring a seamless writing and editing experience required detailed attention to input validation, autosave features, and content structuring.
              </span>
            </li>
            <li>
              <span>
                Another fun challenge was curating the reader experience with <strong>personalized feeds and topic-based filtering</strong>, making sure users could find relevant content quickly. We also designed the platform to be fully <strong>responsive and mobile-friendly</strong>, optimizing the layout for reading comfort across all screen sizes.
              </span>
            </li>
            <li>
              <span>
                Gradasigo reflects my passion for clean UI, meaningful content, and building platforms that empower people to share knowledge and stay connected.
              </span>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: null,
      title: "In Progress",
      description:
        "I'm currently working on a new project that I'm excited to share with you. Stay tuned for updates!",
      logo: "in-progress-logo.png",
      linkText: "View Project",
      type: "in-progress",
    },
  ],
};

export default INFO;
