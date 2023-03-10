export namespace Twitter {
  export interface AffiliatesHighlightedLabel {}

  export interface Description {
    urls: any[];
  }

  export interface Url2 {
    display_url: string;
    expanded_url: string;
    url: string;
    indices: number[];
  }

  export interface Url {
    urls: Url2[];
  }

  export interface Entities {
    description: Description;
    url: Url;
  }

  export interface R {}

  export interface MediaColor {
    r: R;
  }

  export interface ProfileImageExtensions {
    mediaColor: MediaColor;
  }

  export interface Legacy {
    blocked_by: boolean;
    blocking: boolean;
    can_dm: boolean;
    can_media_tag: boolean;
    created_at: string;
    default_profile: boolean;
    default_profile_image: boolean;
    description: string;
    entities: Entities;
    fast_followers_count: number;
    favourites_count: number;
    follow_request_sent: boolean;
    followed_by: boolean;
    followers_count: number;
    following: boolean;
    friends_count: number;
    has_custom_timelines: boolean;
    is_translator: boolean;
    listed_count: number;
    location: string;
    media_count: number;
    muting: boolean;
    name: string;
    normal_followers_count: number;
    notifications: boolean;
    pinned_tweet_ids_str: any[];
    profile_image_extensions: ProfileImageExtensions;
    profile_image_url_https: string;
    profile_interstitial_type: string;
    protected: boolean;
    screen_name: string;
    statuses_count: number;
    translator_type: string;
    url: string;
    verified: boolean;
    want_retweets: boolean;
    withheld_in_countries: any[];
  }

  export interface Result3 {
    __typename: string;
    id: string;
    rest_id: string;
    affiliates_highlighted_label: AffiliatesHighlightedLabel;
    has_nft_avatar: boolean;
    legacy: Legacy;
    super_follow_eligible: boolean;
    super_followed_by: boolean;
    super_following: boolean;
  }

  export interface UserResults {
    result: Result3;
  }

  export interface Core {
    user_results: UserResults;
  }

  export interface ImageValue {
    height: number;
    width: number;
    url: string;
  }

  export interface UserValue {
    id_str: string;
    path: any[];
  }

  export interface Rgb {
    blue: number;
    green: number;
    red: number;
  }

  export interface Palette {
    rgb: Rgb;
    percentage: number;
  }

  export interface ImageColorValue {
    palette: Palette[];
  }

  export interface Value {
    string_value: string;
    type: string;
    image_value: ImageValue;
    scribe_key: string;
    user_value: UserValue;
    image_color_value: ImageColorValue;
  }

  export interface BindingValue {
    key: string;
    value: Value;
  }

  export interface Audience {
    name: string;
  }

  export interface Device {
    name: string;
    version: string;
  }

  export interface Platform {
    audience: Audience;
    device: Device;
  }

  export interface CardPlatform {
    platform: Platform;
  }

  export interface AffiliatesHighlightedLabel2 {}

  export interface Description2 {
    urls: any[];
  }

  export interface Url4 {
    display_url: string;
    expanded_url: string;
    url: string;
    indices: number[];
  }

  export interface Url3 {
    urls: Url4[];
  }

  export interface Entities2 {
    description: Description2;
    url: Url3;
  }

  export interface Rgb2 {
    blue: number;
    green: number;
    red: number;
  }

  export interface Palette2 {
    percentage: number;
    rgb: Rgb2;
  }

  export interface Ok {
    palette: Palette2[];
  }

  export interface R2 {
    ok: Ok;
  }

  export interface MediaColor2 {
    r: R2;
  }

  export interface ProfileBannerExtensions {
    mediaColor: MediaColor2;
  }

  export interface Rgb3 {
    blue: number;
    green: number;
    red: number;
  }

  export interface Palette3 {
    percentage: number;
    rgb: Rgb3;
  }

  export interface Ok2 {
    palette: Palette3[];
  }

  export interface R3 {
    ok: Ok2;
  }

  export interface MediaColor3 {
    r: R3;
  }

  export interface ProfileImageExtensions2 {
    mediaColor: MediaColor3;
  }

  export interface Legacy3 {
    blocked_by: boolean;
    blocking: boolean;
    can_dm: boolean;
    can_media_tag: boolean;
    created_at: string;
    default_profile: boolean;
    default_profile_image: boolean;
    description: string;
    entities: Entities2;
    fast_followers_count: number;
    favourites_count: number;
    follow_request_sent: boolean;
    followed_by: boolean;
    followers_count: number;
    following: boolean;
    friends_count: number;
    has_custom_timelines: boolean;
    is_translator: boolean;
    listed_count: number;
    location: string;
    media_count: number;
    muting: boolean;
    name: string;
    normal_followers_count: number;
    notifications: boolean;
    pinned_tweet_ids_str: any[];
    profile_banner_extensions: ProfileBannerExtensions;
    profile_banner_url: string;
    profile_image_extensions: ProfileImageExtensions2;
    profile_image_url_https: string;
    profile_interstitial_type: string;
    protected: boolean;
    screen_name: string;
    statuses_count: number;
    translator_type: string;
    url: string;
    verified: boolean;
    want_retweets: boolean;
    withheld_in_countries: any[];
  }

  export interface UserRef {
    id: string;
    rest_id: string;
    affiliates_highlighted_label: AffiliatesHighlightedLabel2;
    has_nft_avatar: boolean;
    legacy: Legacy3;
    super_follow_eligible: boolean;
    super_followed_by: boolean;
    super_following: boolean;
  }

  export interface Legacy2 {
    binding_values: BindingValue[];
    card_platform: CardPlatform;
    name: string;
    url: string;
    user_refs: UserRef[];
  }

  export interface Card {
    rest_id: string;
    legacy: Legacy2;
  }

  export interface UserMention {
    id_str: string;
    name: string;
    screen_name: string;
    indices: number[];
  }

  export interface Url5 {
    display_url: string;
    expanded_url: string;
    url: string;
    indices: number[];
  }

  export interface Hashtag {
    indices: number[];
    text: string;
  }

  export interface Entities3 {
    user_mentions: UserMention[];
    urls: Url5[];
    hashtags: Hashtag[];
    symbols: any[];
  }

  export interface Legacy4 {
    created_at: string;
    conversation_id_str: string;
    display_text_range: number[];
    entities: Entities3;
    favorite_count: number;
    favorited: boolean;
    full_text: string;
    is_quote_status: boolean;
    lang: string;
    possibly_sensitive: boolean;
    possibly_sensitive_editable: boolean;
    quote_count: number;
    reply_count: number;
    retweet_count: number;
    retweeted: boolean;
    user_id_str: string;
    id_str: string;
  }

  export interface QuickPromoteEligibility {
    eligibility: string;
  }

  export interface Result2 {
    __typename: string;
    rest_id: string;
    core: Core;
    card: Card;
    legacy: Legacy4;
    quick_promote_eligibility: QuickPromoteEligibility;
  }

  export interface TweetResults {
    result: Result2;
  }

  export interface ItemContent {
    itemType: string;
    tweet_results: TweetResults;
    tweetDisplayType: string;
  }

  export interface Content {
    entryType: string;
    itemContent: ItemContent;
    value: string;
    cursorType: string;
    stopOnEmptyResponse?: boolean;
  }

  export interface Entry {
    entryId: string;
    sortIndex: string;
    content: Content;
  }

  export interface Instruction {
    type: string;
    entries: Entry[];
  }

  export interface ResponseObjects {
    feedbackActions: any[];
    immediateReactions: any[];
  }

  export interface Timeline2 {
    instructions: Instruction[];
    responseObjects: ResponseObjects;
  }

  export interface Timeline {
    timeline: Timeline2;
  }

  export interface Result {
    __typename: string;
    timeline: Timeline;
  }

  export interface User {
    result: Result;
  }

  export interface Data {
    user: User;
  }

  export interface GetTweetsResponse {
    data: Data;
  }
}
