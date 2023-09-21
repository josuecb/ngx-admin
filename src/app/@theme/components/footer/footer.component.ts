import { Component } from '@angular/core';

@Component({
  selector: "ngx-footer",
  styleUrls: ["./footer.component.scss"],
  template: `
    <div class="footer">
      <div class="footer__sepatator"></div>
      <div>
        <p class="footer__captions">
          <span
            >UPS Air Region Portal is designed, built & maintained by Strategic
            Communications.
            <a href="https://akveo.page.link/8V2f" target="_blank">
              Contact 
              <i class="fas fa-external-link-alt"></i> 
            </a>
            |
            <a href="https://akveo.page.link/8V2f" target="_blank">
              report Broken Link  
              <i class="fas fa-external-link-alt"></i> 
            </a>
          </span>
          <br />
          <span
            >Copyright Cl 2023. United Parcel Service of America, Inc. All
            rights reserved. UPS Internal Web Copyright.</span
          >
        </p>
      </div>
    </div>
  `,
})
export class FooterComponent {}
