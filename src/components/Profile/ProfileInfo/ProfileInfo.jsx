import React from "react"
import s from './ProfileInfo.module.css'
import Preloader from "../../common/preloader/Preloader";
import {ProfileStatus} from './ProfileStatus'


export const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
      <div>
          {/*<div className={s.profileMessages}>*/}
          {/*    <img className={s.topImage}*/}
          {/*         src="https://c.wallhere.com/images/88/fc/0a6c07bf86e47b928c5d7699f8a4-1760483.jpg!d"/>*/}
          {/*</div>*/}
          <div className={s.profileMesegges}>
              <img src={props.profile.photos.large}/>
              <ProfileStatus status={'Hello'}/>
              <div>vk: {props.profile.contacts.vk}</div>
              <div>name: {props.profile.fullName}</div>
              <div>
                  {props.profile.lookingForAJob &&
                       <img className={s.jobImage} src="https://yandex-images.clstorage.net/Y5o3A1I39/6bfa39E5sm/oN3Jx_6cGh_qgr-MBlfaI_PDTfOSSPML9zvjP3vu9mHvigF-BMlYQBAHJWwsSZv1dTv4o_BmhUAAryRMCQuCf--KjYvlglUV64K8gQ9M0yT4y0L7llz0Ca9s-D10rvozp8oJfmmjLDBhOQlfUGrq2j5p9fCkfJgXQcYYQXRl9Sii8O7kx4N5Csyp-b0UUtsE3qdE9bwF4GTLF6Y2aKajPorrRwN7lCY_RxcIbldX09AyT8PSo031HWzYMQ9JZN41mc75yPyGbQXkh9yMPnrXJMyqSPOPMuJy1BWUDE6muRiL4lMqd4gBBHoLNkVSZejAH2T47Llj2SF38i4ocnfwIZ_q2crVu3Uj6IPIsj9M2B7NmEfxgxTNWtw3milwm4sfkd5mKWGYHjBAEg9fYF7J-zReyOKDQOM0X90ILXh48gWazNbp2KpVH-CY1rItfvoC7aZh-7wd3GPYE7g-VayTO7zffzpvlywrThwJfWNVzeAFccvxjHDkA0r3Ig1Me_oSg9DRw_yhWR7CvOGNCVfYNfKpb_GMHsl27gyzEGGVrjym7FgoWpQqGFshMHRcetHhIUnx-YlKxCN2ywAva334NZ_K9uLJg1I41pPArABI7iXpmnDCkC3bbNsXhxBukKMsp-h5AF2xPQdSNhFUbVzA-CNJ7dOLc-UlYO4DFHdR3y2QzdLD4aViBPyn2r0kdMoy0Z1ywYwz1VvKMJYZVq-2OL7STCdinxweQCsHb0tI7cw9Y9PngFXVHlHoCTlYfdIqk9PR0MiFYjTvgMe6L1HWBPm9b9SxE_ZS7wafP1SagwWt1UAeYL0nKUAuHG5KVevZP0X99bNN_DZswzQKeXjRCYXkxPL-gVAT-JTjmwx46SrSrGbHkynXcdspkzh-s4IDs9VmOlywGhNNDRBCaGbXxgxC7MetdO4Ed9Y1L0lxxCmvydjh9rxbB8e-4L4oSsQg349v3oou_UDkE6wqe5s"/>
                  }
              </div>
          </div>
      </div>
    );
};
