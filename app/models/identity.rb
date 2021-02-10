# == Schema Information
#
# Table name: identities
#
#  id         :uuid             not null, primary key
#  iss        :string           not null
#  sub        :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :uuid             not null
#
# Indexes
#
#  index_identities_on_user_id  (user_id)
#
class Identity < ApplicationRecord
end
