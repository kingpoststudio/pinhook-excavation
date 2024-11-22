import { html } from "lit";
import type { Meta } from "@storybook/web-components";

const meta: Meta = {
  title: "Team Card",
  component: "px-team-card",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

export const Default = () => {
  return html`
    <div class="grid cols-3 mx-auto max-w-snug">
      <div>
        <tui-dialog-action dialog-id="1">
          <px-team-card>
            <img slot="media" src="https://picsum.photos/id/154/480/480" alt="Placeholder" />
            <h3 class="as-h5" slot="member">Bob Happy</h3>
            <p class="as-body" slot="position">Superintendent</p>
          </px-team-card>
        </tui-dialog-action>
        <tui-dialog id="1">
          <div class="dialog h-fit">
            <div class="dialog__header">
              <h4>Bob Happy</h4>
              <tui-dialog-action action="close" dialog-id="1">
                <px-icon icon="cross"></px-icon>
              </tui-dialog-action>
            </div>
            <div class="dialog__body">
              <p>Bob Happy serves as Superintendent at Pinhook Excavation, bringing 10+ years of experience in managing excavation projects across diverse terrains. Known for a strong work ethic and attention to detail, [Name] oversees site operations, ensures safety compliance, and coordinates with clients and crews to keep projects on track. With a deep understanding of excavation techniques and a commitment to quality, [Name] plays a vital role in delivering results that meet both technical standards and client expectations.</p>
            </div>
          </div>
        </tui-dialog>
      </div>
    </div>
  `;
};
