import React, { FC } from 'react';

export const InstallVessel: FC = () => (
  <>
    <p>
      {`Vessel was not detected. Check it out `}
      <a href="https://vessel.xyz">here</a>
      {` and install it on the `}
      <a href="https://chrome.google.com/webstore/detail/vessel/efabpnahpkdbpejgekahfnecclbepmee">Google Chrome store</a>
      {`.`}
    </p>
  </>
);
