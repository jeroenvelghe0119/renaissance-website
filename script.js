/* =========================================
   RENAISSANCE WEBSITE
   TAB NAVIGATION
========================================= */

document.addEventListener("DOMContentLoaded", function() {
  
  const tabs = document.querySelectorAll(".nav-tab");
  const sections = document.querySelectorAll(".tab-content");
  const beginButton = document.querySelector(".begin-button");
  const topButton = document.getElementById("topButton");
  
  
  /* =====================================
     OPEN A TAB
  ===================================== */
  
  function openTab(tabId) {
    
    /* Hide all pages */
    
    sections.forEach(function(section) {
      
      section.classList.remove("active");
      
    });
    
    
    /* Remove active state from navigation */
    
    tabs.forEach(function(tab) {
      
      tab.classList.remove("active");
      
    });
    
    
    /* Find the requested page */
    
    const selectedSection =
      document.getElementById(tabId);
    
    
    if (!selectedSection) {
      return;
    }
    
    
    /* Show requested page */
    
    selectedSection.classList.add("active");
    
    
    /* Highlight correct navigation button */
    
    const selectedTab =
      document.querySelector(
        `.nav-tab[data-tab="${tabId}"]`
      );
    
    
    if (selectedTab) {
      
      selectedTab.classList.add("active");
      
    }
    
    
    /* Return to the top */
    
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    
  }
  
  
  /* =====================================
     NAVIGATION BUTTONS
  ===================================== */
  
  tabs.forEach(function(tab) {
    
    tab.addEventListener("click", function(event) {
      
      event.preventDefault();
      
      const tabId =
        this.getAttribute("data-tab");
      
      openTab(tabId);
      
    });
    
  });
  
  
  /* =====================================
     BEGIN BUTTON
  ===================================== */
  
  if (beginButton) {
    
    beginButton.addEventListener("click", function(event) {
      
      event.preventDefault();
      
      const tabId =
        this.getAttribute("data-tab");
      
      openTab(tabId);
      
    });
    
  }
  
  
  /* =====================================
     SCROLL TO TOP
  ===================================== */
  
  window.addEventListener("scroll", function() {
    
    if (window.scrollY > 500) {
      
      topButton.classList.add("visible");
      
    } else {
      
      topButton.classList.remove("visible");
      
    }
    
  });
  
  
  topButton.addEventListener("click", function() {
    
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    
  });
  
  
  /* =====================================
     KEYBOARD SHORTCUTS
  ===================================== */
  
  document.addEventListener("keydown", function(event) {
    
    const keyboardTabs = {
      
      "1": "home",
      "2": "beginning",
      "3": "art",
      "4": "knowledge",
      "5": "society",
      "6": "exploration",
      "7": "sources"
      
    };
    
    
    if (keyboardTabs[event.key]) {
      
      openTab(keyboardTabs[event.key]);
      
    }
    
  });
  
  
  /* =====================================
     STARTING TAB
  ===================================== */
  
  const startingHash =
    window.location.hash.substring(1);
  
  
  if (
    startingHash &&
    document.getElementById(startingHash)
  ) {
    
    openTab(startingHash);
    
  }
  
  
});