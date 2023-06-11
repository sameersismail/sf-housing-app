"use client";
import styles from "./profile-card.module.css";
import SeeMoreButton from "./see-more-button/see-more-button";

const ProfileCard = ({ profile }: { profile: HousingSearchProfile }) => {
  console.log({ profile });
  const { user } = profile;

  return (
    <li className={styles.frameParent} id="profile-card-element">
      <div className={styles.image3Parent}>
        {user?.twitter_avatar_url ? (
          <img
            className={styles.image3Icon}
            alt=""
            src={user.twitter_avatar_url}
          />
        ) : null}
        <div className={styles.frameGroup}>
          <a
            className={styles.contactMeWrapper}
            href="https://twitter.com"
            target="_blank"
          >
            <p className={styles.contactMe}>Contact me</p>
          </a>
          <a
            className={styles.vectorParent}
            href="https://a9.io"
            target="_blank"
          >
            <img className={styles.vectorIcon} alt="" src="/link.svg" />
            <div className={styles.a9io}>a9.io</div>
          </a>
          <div className={styles.locationParent}>
            <img className={styles.locationIcon} alt="" src="/location.svg" />
            <p className={styles.sanFrancisco} id="location">
              San Francisco
            </p>
          </div>
        </div>
      </div>
      <div className={styles.frameContainer}>
        <a
          href="https://twitter.com/maxkriegers"
          target="_blank"
          className={styles.frameALink}
        >
          <div className={styles.frameA}>
            <div className={styles.maxKriegerParent}>
              <h4 className={styles.maxKrieger} id="twitter-name">
                {user?.name}
              </h4>
              <div className={styles.maxkriegers}>@maxkriegers</div>
              <img
                className={styles.vectorIcon1}
                alt=""
                src="/twitter-logo.svg"
              />
            </div>
            <sub className={styles.followedBy980} id="followed-by">
              Followed by 980+ people you follow
            </sub>
          </div>
        </a>
        <div className={styles.lookingToLive} id="looking-for-text">
          <div className={styles.content}>
            <span className={styles.wants}>About me: </span>
            Looking to live with people researching and building AI companies
            and love people and kiss people and make out with people and i love
            god
            <SeeMoreButton seeMoreText="Looking to live with people researching and building AI companies and love people and kiss people and make out with people and i love god" />
          </div>
        </div>
        <p className={styles.wants1YearLeaseContainer} id="wants-text">
          <span className={styles.wants}>Wants:</span>
          <span> 1-year lease, 2-4 roommates</span>
        </p>
        <p className={styles.wants1YearLeaseContainer} id="moving-text">
          <span className={styles.wants}>Moving:</span>
          <span>{` Now -> August 2023`}</span>
        </p>
      </div>
    </li>
  );
};

export default ProfileCard;
