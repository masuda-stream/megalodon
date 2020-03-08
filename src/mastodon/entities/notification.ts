/// <reference path="account.ts" />
/// <reference path="status.ts" />

namespace MastodonEntity {
  export type Notification = {
    account: Account
    created_at: string
    id: string
    status?: Status
    type: 'mention' | 'reblog' | 'favourite' | 'follow' | 'poll'
  }
}
