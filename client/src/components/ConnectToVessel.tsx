import React, { FC } from 'react';

export const ConnectToVessel: FC = () => (
  <p>
    {`A popup should be displayed asking to share your attestations. `}
    {`If you've cancelled out of the popup and want to enable it again, `}
    {`remove it from the ignored sites list in Vessel's Connected Sites UI. `}
    {`If you have any questions or feedback, check out our `}
    <a href="https://vesselpassport.zendesk.com/hc/en-us">support page</a>
    {`.`}
  </p>
);
