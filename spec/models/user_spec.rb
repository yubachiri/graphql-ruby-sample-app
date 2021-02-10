# == Schema Information
#
# Table name: users
#
#  id         :uuid             not null, primary key
#  email      :string           not null
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'method' do
    describe 'prepare' do
      let(:id_token_payload) { {
        email: 'sample@example.com',
        sub: 'sample subject',
        iss: 'sample issuer',
      } }

      it 'UserとIdentityが作成される' do
        expect { User.prepare(id_token_payload) }.to change(User, :count).by(1).and change(Identity, :count).by(1)
      end

      context '作成済みの場合' do
        let!(:user) { create(:user, email: id_token_payload[:email]) }
        let!(:identity) { create(:identity, user: user, iss: id_token_payload[:iss], sub: id_token_payload[:sub]) }

        it '新規作成されない' do
          expect { User.prepare(id_token_payload) }.to change(User, :count).by(0).and change(Identity, :count).by(0)
        end

        it '該当するユーザーが取得できる' do
          expect(User.prepare(id_token_payload)).to eq user
        end
      end
    end
  end
end
