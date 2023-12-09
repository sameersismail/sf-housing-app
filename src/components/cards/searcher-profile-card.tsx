import {
  Card,
  CardTop,
  CardBottom,
  CardListSection,
} from "@/components/cards/card";
import UserProfileImage from "@/components/user-profile-image";
import ContactMeButton from "@/components/contact-me-button";
import TwitterLogo from "@/images/twitter-logo.svg";
import Link from "next/link";
import SeeMoreButton from "@/components/see-more-button/see-more-button";
import deriveActivityLevel, { housingMap } from "@/lib/configMaps";
import { addProtocolToURL, cleanURL, dateDiff } from "@/lib/utils/general";
import ActivityStatusDot from "@/components/activity-status-dot";
import { useAuthContext } from "@/contexts/auth-context";
import { ExternalLink } from "lucide-react";
import CardBioSection from "./card-bio-section";

const BIO_MAX_VIEW_LENGTH = 110;

function ReferralBadge({
  handle,
  imageURL,
  name,
}: {
  handle: string;
  imageURL: string;
  name: string;
}) {
  if (!handle || !imageURL || !name) {
    return;
  }

  return (
    <a
      href={`https://x.com/${handle}`}
      className="flex items-center no-underline"
    >
      <span className="mx-1">
        <UserProfileImage size="small" src={imageURL} />
      </span>
      <span className="text-blue-500 hover:text-blue-400">{name}</span>
    </a>
  );
}

type PropsType = {
  profile: HousingSearchProfile;
};

export default function SearcherProfileCard(props: PropsType) {
  const { userSession } = useAuthContext();
  const { profile } = props;

  const bio = profile.pref_housemate_details ?? "";
  const bioSample =
    bio.length > BIO_MAX_VIEW_LENGTH
      ? bio.substring(0, BIO_MAX_VIEW_LENGTH - 2) + "..."
      : bio;

  let activityLevel;
  if (profile.last_updated_date) {
    const { diffDays } = dateDiff(profile.last_updated_date);
    activityLevel = deriveActivityLevel(diffDays);
  }

  return (
    <Card>
      <CardTop>
        <UserProfileImage size="large" src={profile.user?.twitter_avatar_url} />
        <div className="flex flex-col items-center max-w-[60%]">
          <div>
            <span className="font-semibold max-w-[12rem] truncate">
              {profile.user?.name}{" "}
            </span>
            {activityLevel === "high" ? (
              <span className="ml-2">
                <ActivityStatusDot status={activityLevel} />
              </span>
            ) : null}
          </div>

          <Link
            href={`https://x.com/${profile.user?.twitter_handle}`}
            className="flex items-center justify-center w-full"
          >
            <span className="text-blue-500 hover:text-blue-400 py-2 max-w-full truncate">
              @{profile.user?.twitter_handle}
            </span>
            <TwitterLogo className="ml-1 overflow-visible" fill="#3191e7" />
          </Link>
          <ContactMeButton
            phoneNum={profile.contact_phone}
            email={profile.contact_email}
            twitter={profile.user?.twitter_handle}
          />
        </div>
      </CardTop>
      <CardBottom>
        <CardBioSection bio={bio} link={profile.link} />

        <CardListSection sectionTitle="Preference">
          <span className="text-neutral-600">
            {" "}
            {profile.pref_housing_type
              ? housingMap.housingType[profile.pref_housing_type] + ", "
              : null}{" "}
            {profile.pref_housemate_count
              ? housingMap.housemates[profile.pref_housemate_count]
              : null}
          </span>
        </CardListSection>
        <CardListSection sectionTitle="Moving">
          <span className="text-neutral-600">
            {profile.pref_move_in
              ? housingMap.moveIn[profile.pref_move_in]
              : null}
          </span>
        </CardListSection>
        <CardListSection
          sectionTitle="Referred by"
          className="flex items-center"
        >
          {profile.user?.twitter_handle &&
          profile.user?.name &&
          profile.user?.twitter_avatar_url ? (
            <ReferralBadge
              handle={profile.user.twitter_handle}
              name={profile.user.name}
              imageURL={profile.user.twitter_avatar_url}
            />
          ) : null}
        </CardListSection>
      </CardBottom>
    </Card>
  );
}
