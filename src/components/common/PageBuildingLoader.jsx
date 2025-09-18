import React, { useEffect, useRef } from 'react';

const PageBuildingLoader = () => {
  const loaderRef = useRef(null);

  useEffect(() => {
    const loader = loaderRef.current;
    const orbiterCount = 4;
    const animationDuration = 5000; // 5 seconds

    // Create orbiting particles
    for (let i = 0; i < orbiterCount; i++) {
      const orbiter = document.createElement('div');
      orbiter.classList.add('orbit');
      const angle = (i / orbiterCount) * 2 * Math.PI;
      orbiter.style.left = '200px';
      orbiter.style.top = '200px';
      orbiter.style.transform = `rotate(${angle}rad) translateX(60px)`;
      orbiter.style.animation = `orbit ${animationDuration / 1000 * 0.5}s linear infinite`;
      loader.appendChild(orbiter);
    }

    // Create core
    const core = document.createElement('div');
    core.classList.add('core');
    core.style.left = '160px'; // Center of 400x400 container
    core.style.top = '160px';
    core.style.animation = 'glow 2.5s infinite ease-in-out';
    loader.appendChild(core);

    // Stop orbiters and animate core
    setTimeout(() => {
      const orbiters = loader.querySelectorAll('.orbit');
      orbiters.forEach(orbiter => {
        orbiter.style.animation = 'none';
        orbiter.style.transition = `all 1s ease-in-out`;
        orbiter.style.left = '200px';
        orbiter.style.top = '200px';
        orbiter.style.opacity = '0';
        orbiter.style.transform = 'scale(0.2)';
      });
      core.style.transition = `all 1.8s cubic-bezier(0.4, 0, 0.2, 1)`;
      core.style.transform = 'scale(1) rotate(180deg)';
      core.style.opacity = '1';
    }, animationDuration * 0.5);

    // Fade out loader
    setTimeout(() => {
      loader.style.transition = 'opacity 1s ease';
      loader.style.opacity = '0';
      setTimeout(() => {
        loader.remove();
      }, 1000);
    }, animationDuration);

    // Cleanup on component unmount
    return () => {
      loader.innerHTML = ''; // Clear dynamically added elements
    };
  }, []);

  return (
    <div className="bg-white flex items-center justify-center h-[100vh] fixed top-0 left-0 z-30 w-full">
      <div
        ref={loaderRef}
        className="relative w-[400px] h-[400px]"
        style={{
          '--particle-bg': '#BD2F2C',
          '--particle-shadow': '0 0 25px #BD2F2C, 0 0 50px #BD2F2C',
          '--core-gradient': 'linear-gradient(135deg, #BD2F2C, #BD2F2C)',
          '--core-shadow': '0 0 40px #BD2F2C, 0 0 60px #BD2F2C',
          '--orbit-shadow': '0 0 15px #BD2F2C',
        }}
      >
      </div>
    </div>
  );
};

export default PageBuildingLoader;